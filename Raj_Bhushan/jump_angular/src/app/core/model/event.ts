export interface Event{
    id: number;
    eventName: string;
    currentlyAttended: string;
    joined: boolean;
    estimateTime?: number;
    myNumber?: string;
}