export class MathUtil {
    static round(num: number, decPlaces: number): number {
        const decPlacesMultiplier = Math.pow(10, decPlaces);
        return Math.round(num * decPlacesMultiplier) / decPlacesMultiplier;
    }
}