enum TransitionsStatus {
    SUCESS = "SUCESS",
    FAILED = "FAILED"
}

export type Transitions = {
    readonly fromUserid: string
    readonly toUserId: string
    readonly amount: number
    readonly status: TransitionsStatus

}