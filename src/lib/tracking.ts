/**
 * Utility to track outbound link clicks and append UTM parameters for partner tracking on the web.
 */
export const getTrackedUrl = (url: string, source: string, campaign: string): string => {
    try {
        const urlObj = new URL(url);
        urlObj.searchParams.set('utm_source', 'kculture_web');
        urlObj.searchParams.set('utm_medium', source);
        urlObj.searchParams.set('utm_campaign', campaign);

        return urlObj.toString();
    } catch (error) {
        // Fallback for non-http URLs
        return url;
    }
};

export const trackExternalClick = (url: string) => {
    // TODO: Connect Firebase Analytics for Web here
    console.log(`[Analytics Web] Tracking Outbound Link Click: ${url}`);
};
