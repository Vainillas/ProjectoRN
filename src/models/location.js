class Location {


    constructor(locationPart: Part<Location>) {
        if (locationPart) {
            Object.assign(this, locationPart);
        }
    }

    id: number;
    type: string;
    name: string;
    contact: string;
    linkInfo: string;
    latitude: number;
    longitude: number;
}
export default Location;
