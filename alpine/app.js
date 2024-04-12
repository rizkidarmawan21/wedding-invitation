function app() {
    return {
        openInvitation: false,
        isLoadingCover: false,
        music: false,
        audio: '',

        init() {
            this.audio = document.getElementById('myAudio');
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

            this.music = true;
            this.audio.play();
        },

        handleMusic() {
            this.music = !this.music;
            this.music ? this.audio.play() : this.audio.pause();
        }


    }
}