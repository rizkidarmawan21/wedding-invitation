function app() {
    return {
        openInvitation: false,
        isLoadingCover: false,
        music: false,
        audio: '',

        init() {
            this.audio = new Audio('assets/music.mp3');
            this.audio.loop = true;
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
                if (mainContentElement) {
                    this.music = true;

                    this.audio.play();
                }
            }, 1000);
        },

        handleMusic() {
            this.music = !this.music;
            this.music ? this.audio.play() : this.audio.pause();
        }


    }
}