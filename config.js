const TESTURL = 'http://localhost:8889'
//const TESTURL = 'http://testnet.fioprotocol.io'
//const TESTURL = 'http://52.183.126.67:8889'  //dev1
//const TESTURL = 'http://dev2.fio.dev:8889'
//const TESTURL = 'http://dev3.fio.dev:8889'
//const TESTURL = 'http://dev3.fio.dev:8080'  // 8080 is the history node
//const TESTURL = 'http://dev4.fio.dev:8889' 
//const TESTURL = 'https://fio.greymass.com' //Mainnet
//const TESTURL = 'http://devnet-a.az.fio.dev:8888'
//const TESTURL = 'http://52.247.194.34:8889' //Devnet

const DEVTOOLSDIR = '../fio.devtools'

const config = {
    DEFAULT_DOMAIN: 'smoketest',
    URL: TESTURL,
    BASE_URL: TESTURL + '/v1/',
    CLIO: DEVTOOLSDIR + '/bin/clio -u ' + TESTURL,
    WALLETKEY: 'PW5HtgbxQztpSqZvpBveGitSxBZWvF8Q4kw3wxZhCjYWehVtLj3ns', // Unlocks local FIO wallet

    //use this prod key file after you get a copy of the file from Ed, then you can run the
    //fee-voting-fee-setting.js.
   // PRODKEYFILE: DEVTOOLSDIR + '/scripts/launch/producers/keys_producers_devnet.csv',
    PRODKEYFILE: DEVTOOLSDIR + '/scripts/launch/producers/keys.csv',

    FAUCET_PRIV_KEY: '5KF2B21xT5pE5G3LNA6LKJc6AP2pAd2EnfpAUrJH12SFV8NtvCD',
    FAUCET_PUB_KEY: 'FIO6zwqqzHQcqCc2MB4jpp1F73MXpisEQe2SDghQFSGQKoAPjvQ3H',

    FUNDS: 2000000000000,
    BILLION: 1000000000,
    maxFee: 800000000000,

    error: {
        validationError: 'ValidationError',
        validationError2: 'Validation error',
        signatureError: 'Request signature not valid or not allowed.',
        invalidAmount: 'Invalid amount value',
        invalidKey: 'Invalid FIO Public Key',
        keyNotFound: 'Public key not found',
        publicAddressFound: 'Public address not found',
        insufficientBalance: 'Insufficient balance',
        insufficientFunds: 'Insufficient funds to cover fee',
        feeExceedsMax: 'Fee exceeds supplied maximum.',
        domainNotPublic: 'FIO Domain is not public. Only owner can create FIO Addresses.',
        duplicateTxn: 'Duplicate transaction',
        domainRegistered: 'FIO domain already registered',
        invalidDomain: 'Invalid FIO domain',
        fioDomainRequired: 'fioDomain is required.',
        fioAddressNotRegistered: 'FIO Address not registered',
        fioDomainInvalidChar: 'fioDomain must match /^[a-z0-9\\-]+$/i.',
        fioAddressRequired: 'fioAddress is required.',
        fioDomainLengthErr: 'fioDomain must have a length between 1 and 62.',
        fioAddressLengthErr: 'fioAddress must have a length between 3 and 64.',
        //fioAddressInvalidChar: 'fioAddress must match /^(?:(?=.{3,64}$)[a-zA-Z0-9]{1}(?:(?!-{2,}))[a-zA-Z0-9-]*[a-zA-Z0-9]+@[a-zA-Z0-9]{1}(?:(?!-{2,}))[a-zA-Z0-9-]*[a-zA-Z0-9]+$)/gim.',
        fioAddressInvalidChar: 'fioAddress must match /^(?:(?=.{3,64}$)[a-zA-Z0-9]{1}(?:(?:(?!-{2,}))[a-zA-Z0-9-]*[a-zA-Z0-9]+){0,1}@[a-zA-Z0-9]{1}(?:(?:(?!-{2,}))[a-zA-Z0-9-]*[a-zA-Z0-9]+){0,1}$)/gim.',
        invalidFioName: 'Invalid FIO Name',
        noFioNames: 'No FIO names',  // 404 Response
        regdomainLockedAccount: 'regdomain not permitted for account with locked tokens, use an account without locked tokens.',
        nestedProxy: 'assertion failure with message: account registered as a proxy is not allowed to use a proxy',
        invalidDomainOwner: 'The signer does not own the domain',
        fioDomainNotRegistered: 'FIO Domain not registered',
        fioDomainNeedsRenew: 'FIO Domain expired. Renew first.',
        invalidMultiplierFeeError: 'missing setfeemult.multiplier (type=float64)',
        invalidRatioFeeError: 'invalid number',
        noFioDomains: 'No FIO Domains',
        invalidOffset: 'Invalid offset',
        invalidLimit: 'Invalid limit',
        parseError: 'Parse Error',
        noFioAddresses: 'No FIO Addresses',
        noFioRequests: 'No FIO Requests',
        requestNotFound: 'No such FIO Request',
        invalidRequestStatus: 'Only pending requests can be cancelled.',
        noPendingRequests: 'No pending FIO Requests',
        invalidTpid: 'TPID must be empty or valid FIO address',
        invalidRequestSignature: 'Request signature not valid or not allowed.',
        invalidFeeValue: 'Invalid fee value',
        activeProducer: 'FIO Address is active producer. Unregister first.',
        activeProxy: 'FIO Address is proxy. Unregister first.',
        invalidTpidSdk: 'tpid must match /^(?:(?=.{3,64}$)[a-zA-Z0-9]{1}(?:(?:(?!-{2,}))[a-zA-Z0-9-]*[a-zA-Z0-9]+){0,1}@[a-zA-Z0-9]{1}(?:(?:(?!-{2,}))[a-zA-Z0-9-]*[a-zA-Z0-9]+){0,1}$)/gim.'
    },

    error2: {
        noFioNames: {
            message: 'No FIO names',
            statusCode: 404
        },
        addressNotFound: {
            message: 'FIO Address not found',
            statusCode: 404
        },
        invalidFioAddress: {
            message: 'Invalid FIO Address',
            statusCode: 400
        },
        invalidPublicAddress: {
            message: 'Invalid public address',
            statusCode: 400
        },
        invalidTpid: {
            message: 'TPID must be empty or valid FIO address',
            statusCode: 400
        },
        invalidActor: {
            message: 'Invalid Actor',
            statusCode: 403
        },
        invalidSignature: {
            message: 'Request signature not valid or not allowed.',
            statusCode: 403
        },
        noFioNames: {
            message: 'No FIO names',
            type: 404
        },
        addressNotFound: {
            message: 'FIO Address not found',
            type: 404
        },
        invalidFioAddress: {
            message: 'Invalid FIO Address',
            type: 400
        },
        invalidPublicAddress: {
            message: 'Invalid public address',
            type: 400
        },
        invalidTpid: {
            message: 'TPID must be empty or valid FIO address',
            type: 400
        },
        invalidActor: {
            message: 'Invalid Actor',
            type: 403
        },
        invalidSignature: {
            message: 'Request signature not valid or not allowed.',
            type: 403
        },
        invalidAction: {
            message: 'Action invalid or not found',
            type: 500
        },
        invalidContract: {
            message: 'Invalid Contract',
            type: 500
        },
        invalidActor: {
            message: 'Missing required authority',
            type: 500
        },
        accountExists: {
            message: 'Account name already exists',
            type: 500
        },
        noActions: {
            message: 'No actions',
            type: 404
        }
    },

    api: {
        register_fio_domain: {
            bundledEligible: false,
            fee: 800000000000
        },
        register_fio_address: {
            bundledEligible: false,
            fee: 40000000000
        },
        renew_fio_domain: {
            bundledEligible: false,
            fee: 800000000000
        },
        renew_fio_address: {
            bundledEligible: false,
            fee: 40000000000
        },
        burn_fio_address: {
            bundledEligible: true,
            fee: 400000000
        },
        transfer_fio_domain: {
            bundledEligible: false,
            fee: 1000000000
        },
        transfer_fio_address: {
            bundledEligible: false,
            fee: 1000000000
        },
        add_pub_address: {
            bundledEligible: true,
            fee: 600000000
        },
        remove_pub_address: {
            bundledEligible: true,
            fee: 600000000
        },
        remove_all_pub_addresses: {
            bundledEligible: true,
            fee: 600000000
        },
        transfer_tokens_pub_key: {
            bundledEligible: false,
            fee: 2000000000
        },
        new_funds_request: {
            bundledEligible: true,
            fee: 1200000000
        },
        reject_funds_request: {
            bundledEligible: true,
            fee: 600000000
        },
        record_obt_data: {
            bundledEligible: true,
            fee: 1200000000
        },
        set_fio_domain_public: {
            bundledEligible: false,
            fee: 600000000
        },
        register_producer: {
            bundledEligible: false,
            fee: 200000000000
        },
        register_proxy: {
            bundledEligible: false,
            fee: 20000000000
        },
        unregister_proxy: {
            bundledEligible: false,
            fee: 400000000
        },
        unregister_producer: {
            bundledEligible: false,
            fee: 400000000
        },
        proxy_vote: {
            bundledEligible: true,
            fee: 600000000
        },
        vote_producer: {
            bundledEligible: true,
            fee: 600000000
        },
        auth_delete: {
            bundledEligible: false,
            fee: 400000000
        },
        auth_link: {
            bundledEligible: false,
            fee: 400000000
        },
        auth_update: {
            bundledEligible: false,
            fee: 1000000000  // 1.0 per 1,000 bytes
        },
        msig_propose: {
            bundledEligible: false,
            fee: 1000000000  // 1.0 per 1,000 bytes
        },
        msig_approve: {
            bundledEligible: false,
            fee: 400000000
        },
        msig_unapprove: {
            bundledEligible: false,
            fee: 400000000
        },
        msig_cancel: {
            bundledEligible: false,
            fee: 400000000
        },
        msig_exec: {
            bundledEligible: false,
            fee: 400000000
        },
        msig_invalidate: {
            bundledEligible: false,
            fee: 400000000
        } ,
        cancel_funds_request: {
            bundledEligible: true,
            fee: 600000000
        }

    },

    paramMax: {
        fio_domain: 62,
        fio_address: 64,
        chain_code: 10,
        token_code: 10,
        tpid: 64,
        nbpa: 128,
        new_funds_request_content: 296,
        record_obt_data_content: 432,
        auth_delete: 400000000,
        auth_link: 400000000,
        auth_update: 1000000000,
        msig_propose: 1000000000,
        msig_approve: 400000000,
        msig_unapprove: 400000000,
        msig_cancel: 400000000,
        msig_exec: 400000000,
        msig_invalidate: 400000000
    },

    RAM: {
        INITIALACCOUNTRAM: 25600,
        REGDOMAINRAM: 2560,
        REGADDRESSRAM: 2560,
        ADDADDRESSRAM: 512,
        SETDOMAINPUBRAM: 256,
        BURNEXPIREDRAM: 0,
        NEWFUNDSREQUESTRAM: 2048,
        RECORDOBTRAM: 2048,
        RENEWADDRESSRAM: 1024,
        RENEWDOMAINRAM: 1024,
        TPIDCLAIMRAM: 0,
        BPCLAIMRAM: 0,
        TRANSFERRAM: 0,
        TRANSFERPUBKEYRAM: 1024,
        REJECTFUNDSRAM: 512,
        UPDATEFEESRAM: 0,
        SETFEEVOTERAM: 0,
        BUNDLEVOTERAM: 0,
        SETFEEMULTRAM: 0,
        LINKAUTHRAM: 1024,
        REGPRODUCERRAM: 2560,
        UNREGPRODUCERRAM: 0,
        REGPROXYRAM: 2560,
        UNREGPROXYRAM: 0,
        VOTEPROXYRAM: 512,
        VOTEPRODUCERRAM: 1024,
        UPDATEAUTHRAM: 1024,
        XFERDOMAINRAM: 512,
        XFERADDRESSRAM: 512,
        CANCELFUNDSRAM: 512
    },

    public_addresses: [
      {
        chain_code: 'BCH',
        token_code: 'BCH',
        public_address: 'bitcoincash:qzf8zha74ahdh9j0xnwlffdn0zuyaslx3c90q7n9g9',
      },
      {
        chain_code: 'DASH',
        token_code: 'DASH',
        public_address: 'XyCyPKzTWvW2XdcYjPaPXGQDCGk946ywEv',
      }
    ],

    devBPs: [{
            "account": "3rmu4bip1dpi",
            "feeMultiplier": 1.0
        },
        {
            "account": "hpketsxgdcxe",
            "feeMultiplier": 1.0
        },
        {
            "account": "l4wbalfn5jcp",
            "feeMultiplier": 1.0
        }
    ]
}

module.exports = config;
