function app() {
    return {
        openInvitation: false,
        isLoadingCover: false,
        music: false,
        audio: '',
        timeLeft: { days: 0, hours: 0, minutes: 0, seconds: 0 },

        init() {
            this.audio = document.getElementById('myAudio');

            this.countdownTimer();
        },

        handleOpenInvitation() {
            this.isLoadingCover = true;
            setTimeout(() => {
                this.openInvitation = true;
                this.isLoadingCover = false;

                const mainContentElement = this.$refs.mainContent;
                // Set style display to block
                if (mainContentElement) {
                    mainContentElement.style.display = 'block';
                }
                // Scroll to main content
                if (mainContentElement) {
                    mainContentElement.scrollIntoView({ behavior: 'smooth' });
                }

            }, 1000);

            this.handleMusic();
        },

        handleMusic() {
            this.music = !this.music;
            this.music ? this.audio.play() : this.audio.pause();
        },

        // Reference: https://www.w3schools.com/howto/howto_js_countdown.asp
        countdownTimer() {
            const targetDate = new Date("2025-04-13T10:00:00").getTime();

            const updateCountdown = () => {
                const now = new Date().getTime();
                const difference = targetDate - now;

                if (difference > 0) {
                    this.timeLeft = {
                        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                        seconds: Math.floor((difference % (1000 * 60)) / 1000)

                    };
                } else {
                    this.timeLeft = null;
                }
            }

            updateCountdown();
            setInterval(updateCountdown, 1000);
        }



    }
}