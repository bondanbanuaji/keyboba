<template>
  <div class="dropdown dropdown-top">
    <label tabindex="0" class="btn btn-secondary">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
      Share Result
    </label>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-200 rounded-box w-52">
      <li><a @click="shareToTwitter">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
        </svg>
        Twitter
      </a></li>
      <li><a @click="shareToFacebook">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
        </svg>
        Facebook
      </a></li>
      <li><a @click="copyToClipboard">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Copy Link
      </a></li>
      <li><a @click="downloadAsImage">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Save as Image
      </a></li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  wpm: {
    type: Number,
    required: true
  },
  accuracy: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 60
  }
})

const shareText = `I just typed ${props.wpm} WPM with ${props.accuracy}% accuracy on KeyBoba! 🎹⚡ Can you beat my score?`
const shareUrl = window.location.origin

const shareToTwitter = () => {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`
  window.open(url, '_blank', 'width=550,height=420')
}

const shareToFacebook = () => {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`
  window.open(url, '_blank', 'width=550,height=420')
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`)
    alert('Link copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const downloadAsImage = () => {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  
  canvas.width = 800
  canvas.height = 400
  
  // Background
  const gradient = ctx.createLinearGradient(0, 0, 800, 400)
  gradient.addColorStop(0, '#FF6B6B')
  gradient.addColorStop(1, '#FFA500')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 800, 400)
  
  // Text
  ctx.fillStyle = '#ffffff'
  ctx.font = 'bold 60px Arial'
  ctx.textAlign = 'center'
  ctx.fillText('KeyBoba', 400, 100)
  
  ctx.font = 'bold 80px Arial'
  ctx.fillText(`${props.wpm} WPM`, 400, 200)
  
  ctx.font = '40px Arial'
  ctx.fillText(`${props.accuracy}% Accuracy`, 400, 260)
  
  ctx.font = '30px Arial'
  ctx.fillText('keyboba.com', 400, 350)
  
  // Download
  const link = document.createElement('a')
  link.download = `keyboba-result-${props.wpm}wpm.png`
  link.href = canvas.toDataURL()
  link.click()
}
</script>
