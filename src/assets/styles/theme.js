export const getTheme = (mode) => {
    const fontSize = {
        xs: "10px",
        s: "12px",
        m: "14px",
        l: "16px",
        xl: "18px",
        xxl: "20px"
    };

    const brakePoints = {
        small: "375px",
        medium: "768px"
    };

    const colors = () => {
        if (mode === "dark")
            return {
                darkGray: `hsl(0, 0%, 52%)`,

                backgroundPrimary: `hsl(209, 23%, 22%)`,
                backgroundSecondary: `hsl(207, 26%, 17%)`,

                textPrimary: `hsl(0, 0%, 100%)`,
                textSecondary: `hsla(0, 0%, 100%, 0.8)`
            };

        if (mode === "light")
            return {
                veryDarkBlue: `hsl(207, 26%, 17%)`,
                veryDarkBlueText: `hsl(200, 15%, 8%)`,
                darkGray: `hsl(0, 0%, 52%)`,

                backgroundPrimary: `hsl(0, 0%, 95%)`,
                backgroundSecondary: `hsl(0, 0%, 91%)`,

                textPrimary: `hsl(200, 15%, 8%)`,
                textSecondary: `hsl(207, 26%, 17%)`
            };
    };

    return {
        colors: colors(),
        brakePoints,
        fontSize
    };
};
