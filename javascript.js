const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
};


let base_url = '';
const dropdown = document.querySelectorAll('.dropdown select');
const img=document.querySelectorAll('.dropdown img');

for ( codes in countryList) {
    console.log(codes  , countryList[codes]);
}


for (select of dropdown) {
    for (codes in countryList) {
        let option = document.createElement('option');
        option.value = codes;
        option.innerHTML = codes;
        select.append(option);
    }
    }



for (select of dropdown)
{
  
    select.addEventListener('change', function (evt) {
        console.log('chnge');
        updateflag(evt.target);

    });
}

let fromCurr = document.querySelector('.from select');
let toCurr = document.querySelector('.to select');




function updateflag(target)
{
   let  country_code=target.value;
    let img=target.parentElement.querySelector('img');
    img.src=`https://flagsapi.com/${countryList[country_code]}/shiny/64.png`;

}

base_url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/';
let msg = document.querySelector('.msg');
button = document.querySelector('button');
button.addEventListener('click',async function (evt) {
    evt.preventDefault();
    
    // console.log(button.innerHTML);
    input = document.querySelector('form input');
    let amount = input.value;
    if ((amount === '') || (amount < 0)) {
        input.value = '1';
        amount = input.value;
    }
    from = fromCurr.value.toLowerCase();
    to = toCurr.value.toLowerCase();

    let URL = `${base_url}${from}.json`;
    console.log(URL);
    let response = await fetch(URL);
    let x = await response.json();
    console.log(from);
    console.log(x[from][to]);
    rate = x[from][to];
   // console.log(from * rate);
    msg.innerHTML = `${amount} ${fromCurr.value} = ${amount * rate} ${toCurr.value}`



   // console.log(amount, fromCurr.value, toCurr.value);
});

document.addEventListener('DOMContentLoaded', function () {
    dropdown[0].value = 'USD';
    dropdown[1].value = 'PKR';
    let URL = `${base_url}usd.json`;
    // console.log(from * rate);
    msg.innerHTML = `1 USD = `


});