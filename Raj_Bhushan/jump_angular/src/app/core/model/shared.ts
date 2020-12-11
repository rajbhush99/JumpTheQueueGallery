export class FilterVisitor {
    pageable: Pageable;
    username: string;
    password?: string;
}
export class FilterQueueDetail {
    pageable: Pageable;
    visitorId: Number;
}

export class FilterEvent {
    pageable: Pageable;
}
export class Pageable {
    pageSize: number;
    pageNumber: number;
    sort: Sort[];
}

export class Sort {
    property: string;
    direction: string;
}
export class Role {
    name: string;
    permission: number;
}
export class Visitor {
    id: number;
    username: string;
    name: string;
    password: string;
    phoneNumber: string;
    acceptedCommercial: boolean;
    acceptedTerms: boolean;
    userType: boolean;
}

export class Event {
    id?: number;
    eventName: string;
    logo: string;
    currentNumber: string;
    attentionTime: string;
    customers: number;
    
}
export class QueueDetail {
    id: any;
    queueNumber: string;
    creationTime: string;
    startTime?: string;
    endTime?: string;
    minEstimatedTime:any;
    visitorId: number;
    eventId: number;
}
export class LoginVisitor{
    username: string;
    password: string;
}


