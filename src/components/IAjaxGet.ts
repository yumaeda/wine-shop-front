/**
 * Interface for AJAX get request state
 */
export interface IAjaxGet {
    error: Error | null
    loaded: boolean
    result: any | null
}
