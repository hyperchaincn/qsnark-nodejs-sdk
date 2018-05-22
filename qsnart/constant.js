
exports.HOST = 'https://dev.hyperchain.cn'
// token
exports.GET_ACCESS_TOKEN_API = "/v1/token/gtoken"
exports.REFRESH_ACCESS_TOKEN_API = "/v1/token/rtoken"

// block
exports.QUERY_BLCOK_API = "/v1/dev/block/query"
exports.QUERY_BLCOK_PAGE_API = "/v1/dev/blocks/page"
exports.QUERY_BLCOK_RANGE_API = "/v1/dev/blocks/range"

// _CONTRACT
exports.COMPILE_CONTRACT_API    = "/v1/dev/contract/compile"
exports.DEPLOY_CONTRACT_API     = "/v1/dev/contract/deploy"
exports.DEPLOY_CONTRACT_SYNC_API = "/v1/dev/contract/deploysync"
exports.GET_PAYLOAD_API         = "/v1/dev/payload"
exports.INVOKE_CONTRACT_API     = "/v1/dev/contract/invoke"
exports.INVOKE_CONTRACT_SYNC_API = "/v1/dev/contract/invokesync"
exports.MAINTAIN_CONTRACT_API   = "/v1/dev/contract/maintain"
exports.CONTRACT_STATUS_API     = "/v1/dev/contract/status"

exports.TRANSACTION_COUNT_API     = "/v1/dev/transaction/count"
exports.QUERY_TRANSACTION_API     = "/v1/dev/transaction/query"
exports.TRANSACTION_TXRECEIPT_API = "/v1/dev/transaction/txreceipt"
exports.DISCARD_TRANSACTION_API   = "/v1/dev/transactions/discard"

// account
exports.CREATE_ACCOUNT_API = "/v1/dev/account/create"
