/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ORDERS').del()
  await knex('ORDERS').insert([
    {
      order_id: 652,
      customer_id: 33,
      order_date: "2024-04-25T22:57:05.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 273,
      customer_id: 15,
      order_date: "2024-03-31T05:57:11.000Z",
      subtotal: 1295000,
      discount: 0,
      sale_tax: 129500,
      total: 1424500
    },
    {
      order_id: 51,
      customer_id: 14,
      order_date: "2024-03-02T12:03:25.000Z",
      subtotal: 1018000,
      discount: 0,
      sale_tax: 101800,
      total: 1119800
    },
    {
      order_id: 951,
      customer_id: 37,
      order_date: "2024-12-27T05:56:23.000Z",
      subtotal: 199000,
      discount: 0,
      sale_tax: 19900,
      total: 218900
    },
    {
      order_id: 839,
      customer_id: 43,
      order_date: "2024-11-21T12:23:45.000Z",
      subtotal: 2120000,
      discount: 0,
      sale_tax: 212000,
      total: 2332000
    },
    {
      order_id: 70,
      customer_id: 15,
      order_date: "2024-01-30T19:33:51.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 350,
      customer_id: 24,
      order_date: "2024-06-04T12:03:56.000Z",
      subtotal: 2272000,
      discount: 0,
      sale_tax: 227200,
      total: 2499200
    },
    {
      order_id: 758,
      customer_id: 33,
      order_date: "2024-01-02T23:52:23.000Z",
      subtotal: 813000,
      discount: 0,
      sale_tax: 81300,
      total: 894300
    },
    {
      order_id: 539,
      customer_id: 8,
      order_date: "2024-09-04T17:38:32.000Z",
      subtotal: 2829000,
      discount: 0,
      sale_tax: 282900,
      total: 3111900
    },
    {
      order_id: 874,
      customer_id: 2,
      order_date: "2024-06-10T07:02:18.000Z",
      subtotal: 2232000,
      discount: 0,
      sale_tax: 223200,
      total: 2455200
    },
    {
      order_id: 278,
      customer_id: 13,
      order_date: "2024-07-16T19:05:29.000Z",
      subtotal: 2057000,
      discount: 0,
      sale_tax: 205700,
      total: 2262700
    },
    {
      order_id: 946,
      customer_id: 48,
      order_date: "2024-03-30T08:57:16.000Z",
      subtotal: 3928000,
      discount: 0,
      sale_tax: 392800,
      total: 4320800
    },
    {
      order_id: 176,
      customer_id: 5,
      order_date: "2024-11-17T18:47:56.000Z",
      subtotal: 698000,
      discount: 0,
      sale_tax: 69800,
      total: 767800
    },
    {
      order_id: 576,
      customer_id: 35,
      order_date: "2024-04-14T12:34:24.000Z",
      subtotal: 2385000,
      discount: 0,
      sale_tax: 238500,
      total: 2623500
    },
    {
      order_id: 292,
      customer_id: 5,
      order_date: "2024-06-05T18:08:38.000Z",
      subtotal: 829000,
      discount: 0,
      sale_tax: 82900,
      total: 911900
    },
    {
      order_id: 929,
      customer_id: 24,
      order_date: "2024-07-12T02:11:06.000Z",
      subtotal: 717000,
      discount: 0,
      sale_tax: 71700,
      total: 788700
    },
    {
      order_id: 663,
      customer_id: 35,
      order_date: "2024-01-25T04:24:15.000Z",
      subtotal: 435000,
      discount: 0,
      sale_tax: 43500,
      total: 478500
    },
    {
      order_id: 770,
      customer_id: 45,
      order_date: "2024-08-29T06:51:09.000Z",
      subtotal: 3389000,
      discount: 0,
      sale_tax: 338900,
      total: 3727900
    },
    {
      order_id: 271,
      customer_id: 21,
      order_date: "2024-10-06T08:30:16.000Z",
      subtotal: 2799000,
      discount: 0,
      sale_tax: 279900,
      total: 3078900
    },
    {
      order_id: 22,
      customer_id: 42,
      order_date: "2024-08-18T11:11:18.000Z",
      subtotal: 857000,
      discount: 0,
      sale_tax: 85700,
      total: 942700
    },
    {
      order_id: 417,
      customer_id: 12,
      order_date: "2024-10-01T10:02:52.000Z",
      subtotal: 1296000,
      discount: 0,
      sale_tax: 129600,
      total: 1425600
    },
    {
      order_id: 764,
      customer_id: 27,
      order_date: "2024-12-27T10:20:31.000Z",
      subtotal: 2187000,
      discount: 0,
      sale_tax: 218700,
      total: 2405700
    },
    {
      order_id: 556,
      customer_id: 46,
      order_date: "2024-02-06T01:24:03.000Z",
      subtotal: 2309000,
      discount: 0,
      sale_tax: 230900,
      total: 2539900
    },
    {
      order_id: 529,
      customer_id: 12,
      order_date: "2024-12-08T11:39:47.000Z",
      subtotal: 48000,
      discount: 0,
      sale_tax: 4800,
      total: 52800
    },
    {
      order_id: 638,
      customer_id: 4,
      order_date: "2024-11-23T17:00:17.000Z",
      subtotal: 150000,
      discount: 0,
      sale_tax: 15000,
      total: 165000
    },
    {
      order_id: 791,
      customer_id: 38,
      order_date: "2024-08-05T01:27:55.000Z",
      subtotal: 2209000,
      discount: 0,
      sale_tax: 220900,
      total: 2429900
    },
    {
      order_id: 775,
      customer_id: 45,
      order_date: "2024-09-27T04:46:58.000Z",
      subtotal: 2187000,
      discount: 0,
      sale_tax: 218700,
      total: 2405700
    },
    {
      order_id: 940,
      customer_id: 21,
      order_date: "2024-07-29T14:01:16.000Z",
      subtotal: 1592000,
      discount: 0,
      sale_tax: 159200,
      total: 1751200
    },
    {
      order_id: 390,
      customer_id: 15,
      order_date: "2024-09-22T11:23:39.000Z",
      subtotal: 2158000,
      discount: 0,
      sale_tax: 215800,
      total: 2373800
    },
    {
      order_id: 173,
      customer_id: 30,
      order_date: "2024-07-30T14:52:25.000Z",
      subtotal: 4495000,
      discount: 0,
      sale_tax: 449500,
      total: 4944500
    },
    {
      order_id: 42,
      customer_id: 24,
      order_date: "2024-08-08T08:13:44.000Z",
      subtotal: 1216000,
      discount: 0,
      sale_tax: 121600,
      total: 1337600
    },
    {
      order_id: 189,
      customer_id: 20,
      order_date: "2024-07-20T04:12:39.000Z",
      subtotal: 1703000,
      discount: 0,
      sale_tax: 170300,
      total: 1873300
    },
    {
      order_id: 876,
      customer_id: 19,
      order_date: "2024-10-18T15:24:04.000Z",
      subtotal: 1400000,
      discount: 0,
      sale_tax: 140000,
      total: 1540000
    },
    {
      order_id: 161,
      customer_id: 8,
      order_date: "2024-02-21T09:15:22.000Z",
      subtotal: 3328000,
      discount: 0,
      sale_tax: 332800,
      total: 3660800
    },
    {
      order_id: 113,
      customer_id: 5,
      order_date: "2024-06-14T02:49:47.000Z",
      subtotal: 418000,
      discount: 0,
      sale_tax: 41800,
      total: 459800
    },
    {
      order_id: 632,
      customer_id: 16,
      order_date: "2024-03-10T12:03:35.000Z",
      subtotal: 980000,
      discount: 0,
      sale_tax: 98000,
      total: 1078000
    },
    {
      order_id: 658,
      customer_id: 37,
      order_date: "2024-12-10T13:01:32.000Z",
      subtotal: 644000,
      discount: 0,
      sale_tax: 64400,
      total: 708400
    },
    {
      order_id: 120,
      customer_id: 48,
      order_date: "2024-06-10T01:52:51.000Z",
      subtotal: 1324000,
      discount: 0,
      sale_tax: 132400,
      total: 1456400
    },
    {
      order_id: 802,
      customer_id: 12,
      order_date: "2024-03-05T21:13:09.000Z",
      subtotal: 1622000,
      discount: 0,
      sale_tax: 162200,
      total: 1784200
    },
    {
      order_id: 578,
      customer_id: 19,
      order_date: "2024-10-11T03:55:47.000Z",
      subtotal: 2331000,
      discount: 0,
      sale_tax: 233100,
      total: 2564100
    },
    {
      order_id: 815,
      customer_id: 4,
      order_date: "2024-12-05T21:54:44.000Z",
      subtotal: 791000,
      discount: 0,
      sale_tax: 79100,
      total: 870100
    },
    {
      order_id: 695,
      customer_id: 19,
      order_date: "2024-07-16T00:20:11.000Z",
      subtotal: 1711000,
      discount: 0,
      sale_tax: 171100,
      total: 1882100
    },
    {
      order_id: 440,
      customer_id: 36,
      order_date: "2024-10-22T14:28:03.000Z",
      subtotal: 5072000,
      discount: 0,
      sale_tax: 507200,
      total: 5579200
    },
    {
      order_id: 794,
      customer_id: 13,
      order_date: "2024-10-02T07:13:17.000Z",
      subtotal: 552000,
      discount: 0,
      sale_tax: 55200,
      total: 607200
    },
    {
      order_id: 57,
      customer_id: 19,
      order_date: "2024-03-27T13:20:06.000Z",
      subtotal: 507000,
      discount: 0,
      sale_tax: 50700,
      total: 557700
    },
    {
      order_id: 19,
      customer_id: 28,
      order_date: "2024-05-06T04:07:08.000Z",
      subtotal: 1264000,
      discount: 0,
      sale_tax: 126400,
      total: 1390400
    },
    {
      order_id: 160,
      customer_id: 48,
      order_date: "2024-05-21T05:17:31.000Z",
      subtotal: 697000,
      discount: 0,
      sale_tax: 69700,
      total: 766700
    },
    {
      order_id: 644,
      customer_id: 40,
      order_date: "2024-07-01T02:16:09.000Z",
      subtotal: 2479000,
      discount: 0,
      sale_tax: 247900,
      total: 2726900
    },
    {
      order_id: 824,
      customer_id: 42,
      order_date: "2024-02-23T12:03:10.000Z",
      subtotal: 296000,
      discount: 0,
      sale_tax: 29600,
      total: 325600
    },
    {
      order_id: 508,
      customer_id: 36,
      order_date: "2024-08-04T14:10:37.000Z",
      subtotal: 1011000,
      discount: 0,
      sale_tax: 101100,
      total: 1112100
    },
    {
      order_id: 357,
      customer_id: 12,
      order_date: "2024-03-03T05:55:36.000Z",
      subtotal: 767000,
      discount: 0,
      sale_tax: 76700,
      total: 843700
    },
    {
      order_id: 769,
      customer_id: 27,
      order_date: "2024-10-19T11:13:03.000Z",
      subtotal: 2960000,
      discount: 0,
      sale_tax: 296000,
      total: 3256000
    },
    {
      order_id: 266,
      customer_id: 12,
      order_date: "2024-08-17T10:16:53.000Z",
      subtotal: 1337000,
      discount: 0,
      sale_tax: 133700,
      total: 1470700
    },
    {
      order_id: 747,
      customer_id: 17,
      order_date: "2024-09-17T01:55:25.000Z",
      subtotal: 1622000,
      discount: 0,
      sale_tax: 162200,
      total: 1784200
    },
    {
      order_id: 222,
      customer_id: 9,
      order_date: "2024-12-07T11:07:57.000Z",
      subtotal: 1944000,
      discount: 0,
      sale_tax: 194400,
      total: 2138400
    },
    {
      order_id: 777,
      customer_id: 6,
      order_date: "2024-12-15T13:36:31.000Z",
      subtotal: 919000,
      discount: 0,
      sale_tax: 91900,
      total: 1010900
    },
    {
      order_id: 164,
      customer_id: 48,
      order_date: "2024-02-04T21:08:57.000Z",
      subtotal: 1096000,
      discount: 0,
      sale_tax: 109600,
      total: 1205600
    },
    {
      order_id: 922,
      customer_id: 32,
      order_date: "2024-12-10T02:06:34.000Z",
      subtotal: 4950000,
      discount: 0,
      sale_tax: 495000,
      total: 5445000
    },
    {
      order_id: 453,
      customer_id: 18,
      order_date: "2024-08-20T07:36:02.000Z",
      subtotal: 1446000,
      discount: 0,
      sale_tax: 144600,
      total: 1590600
    },
    {
      order_id: 787,
      customer_id: 24,
      order_date: "2024-11-06T10:32:21.000Z",
      subtotal: 384000,
      discount: 0,
      sale_tax: 38400,
      total: 422400
    },
    {
      order_id: 186,
      customer_id: 45,
      order_date: "2024-08-29T12:08:23.000Z",
      subtotal: 2754000,
      discount: 0,
      sale_tax: 275400,
      total: 3029400
    },
    {
      order_id: 501,
      customer_id: 24,
      order_date: "2024-05-25T08:57:42.000Z",
      subtotal: 698000,
      discount: 0,
      sale_tax: 69800,
      total: 767800
    },
    {
      order_id: 750,
      customer_id: 48,
      order_date: "2024-10-14T15:52:41.000Z",
      subtotal: 2060000,
      discount: 0,
      sale_tax: 206000,
      total: 2266000
    },
    {
      order_id: 545,
      customer_id: 20,
      order_date: "2024-09-16T19:17:17.000Z",
      subtotal: 4987000,
      discount: 0,
      sale_tax: 498700,
      total: 5485700
    },
    {
      order_id: 182,
      customer_id: 20,
      order_date: "2024-06-16T18:25:27.000Z",
      subtotal: 275000,
      discount: 0,
      sale_tax: 27500,
      total: 302500
    },
    {
      order_id: 977,
      customer_id: 4,
      order_date: "2024-01-02T17:26:24.000Z",
      subtotal: 2282000,
      discount: 0,
      sale_tax: 228200,
      total: 2510200
    },
    {
      order_id: 18,
      customer_id: 40,
      order_date: "2024-05-13T04:45:56.000Z",
      subtotal: 532000,
      discount: 0,
      sale_tax: 53200,
      total: 585200
    },
    {
      order_id: 528,
      customer_id: 28,
      order_date: "2024-01-31T14:13:00.000Z",
      subtotal: 2657000,
      discount: 0,
      sale_tax: 265700,
      total: 2922700
    },
    {
      order_id: 27,
      customer_id: 43,
      order_date: "2024-05-15T11:13:01.000Z",
      subtotal: 5867000,
      discount: 0,
      sale_tax: 586700,
      total: 6453700
    },
    {
      order_id: 811,
      customer_id: 34,
      order_date: "2024-09-05T10:19:52.000Z",
      subtotal: 1166000,
      discount: 0,
      sale_tax: 116600,
      total: 1282600
    },
    {
      order_id: 563,
      customer_id: 10,
      order_date: "2024-10-01T23:14:01.000Z",
      subtotal: 816000,
      discount: 0,
      sale_tax: 81600,
      total: 897600
    },
    {
      order_id: 143,
      customer_id: 40,
      order_date: "2024-04-21T23:53:23.000Z",
      subtotal: 169000,
      discount: 0,
      sale_tax: 16900,
      total: 185900
    },
    {
      order_id: 496,
      customer_id: 27,
      order_date: "2024-08-02T20:38:57.000Z",
      subtotal: 458000,
      discount: 0,
      sale_tax: 45800,
      total: 503800
    },
    {
      order_id: 58,
      customer_id: 35,
      order_date: "2024-11-16T09:45:30.000Z",
      subtotal: 189000,
      discount: 0,
      sale_tax: 18900,
      total: 207900
    },
    {
      order_id: 228,
      customer_id: 8,
      order_date: "2024-02-12T12:22:11.000Z",
      subtotal: 441000,
      discount: 0,
      sale_tax: 44100,
      total: 485100
    },
    {
      order_id: 667,
      customer_id: 20,
      order_date: "2024-01-25T05:03:14.000Z",
      subtotal: 2607000,
      discount: 0,
      sale_tax: 260700,
      total: 2867700
    },
    {
      order_id: 814,
      customer_id: 12,
      order_date: "2024-02-07T09:08:22.000Z",
      subtotal: 1203000,
      discount: 0,
      sale_tax: 120300,
      total: 1323300
    },
    {
      order_id: 668,
      customer_id: 34,
      order_date: "2024-01-24T23:31:56.000Z",
      subtotal: 603000,
      discount: 0,
      sale_tax: 60300,
      total: 663300
    },
    {
      order_id: 850,
      customer_id: 25,
      order_date: "2024-06-06T12:47:42.000Z",
      subtotal: 1778000,
      discount: 0,
      sale_tax: 177800,
      total: 1955800
    },
    {
      order_id: 294,
      customer_id: 48,
      order_date: "2024-04-08T00:10:31.000Z",
      subtotal: 2132000,
      discount: 0,
      sale_tax: 213200,
      total: 2345200
    },
    {
      order_id: 481,
      customer_id: 44,
      order_date: "2024-05-28T04:11:23.000Z",
      subtotal: 3248000,
      discount: 0,
      sale_tax: 324800,
      total: 3572800
    },
    {
      order_id: 926,
      customer_id: 29,
      order_date: "2024-07-14T13:26:37.000Z",
      subtotal: 1524000,
      discount: 0,
      sale_tax: 152400,
      total: 1676400
    },
    {
      order_id: 645,
      customer_id: 47,
      order_date: "2024-03-17T09:20:23.000Z",
      subtotal: 1778000,
      discount: 0,
      sale_tax: 177800,
      total: 1955800
    },
    {
      order_id: 607,
      customer_id: 31,
      order_date: "2024-04-05T05:33:00.000Z",
      subtotal: 2552000,
      discount: 0,
      sale_tax: 255200,
      total: 2807200
    },
    {
      order_id: 438,
      customer_id: 33,
      order_date: "2024-01-13T20:28:57.000Z",
      subtotal: 4307000,
      discount: 0,
      sale_tax: 430700,
      total: 4737700
    },
    {
      order_id: 382,
      customer_id: 14,
      order_date: "2024-10-20T00:48:56.000Z",
      subtotal: 972000,
      discount: 0,
      sale_tax: 97200,
      total: 1069200
    },
    {
      order_id: 258,
      customer_id: 1,
      order_date: "2024-04-25T00:45:30.000Z",
      subtotal: 3282000,
      discount: 0,
      sale_tax: 328200,
      total: 3610200
    },
    {
      order_id: 853,
      customer_id: 27,
      order_date: "2024-01-14T02:56:29.000Z",
      subtotal: 1149000,
      discount: 0,
      sale_tax: 114900,
      total: 1263900
    },
    {
      order_id: 378,
      customer_id: 35,
      order_date: "2024-09-22T22:31:04.000Z",
      subtotal: 1144000,
      discount: 0,
      sale_tax: 114400,
      total: 1258400
    },
    {
      order_id: 483,
      customer_id: 19,
      order_date: "2024-12-28T23:30:41.000Z",
      subtotal: 781000,
      discount: 0,
      sale_tax: 78100,
      total: 859100
    },
    {
      order_id: 84,
      customer_id: 10,
      order_date: "2024-04-30T12:05:44.000Z",
      subtotal: 1339000,
      discount: 0,
      sale_tax: 133900,
      total: 1472900
    },
    {
      order_id: 799,
      customer_id: 29,
      order_date: "2024-10-06T15:21:04.000Z",
      subtotal: 507000,
      discount: 0,
      sale_tax: 50700,
      total: 557700
    },
    {
      order_id: 276,
      customer_id: 29,
      order_date: "2024-06-14T03:15:30.000Z",
      subtotal: 384000,
      discount: 0,
      sale_tax: 38400,
      total: 422400
    },
    {
      order_id: 646,
      customer_id: 3,
      order_date: "2024-08-28T00:34:27.000Z",
      subtotal: 1437000,
      discount: 0,
      sale_tax: 143700,
      total: 1580700
    },
    {
      order_id: 379,
      customer_id: 5,
      order_date: "2024-05-04T17:40:45.000Z",
      subtotal: 3344000,
      discount: 0,
      sale_tax: 334400,
      total: 3678400
    },
    {
      order_id: 320,
      customer_id: 42,
      order_date: "2024-12-08T04:03:40.000Z",
      subtotal: 1436000,
      discount: 0,
      sale_tax: 143600,
      total: 1579600
    },
    {
      order_id: 942,
      customer_id: 7,
      order_date: "2024-08-21T06:35:35.000Z",
      subtotal: 375000,
      discount: 0,
      sale_tax: 37500,
      total: 412500
    },
    {
      order_id: 115,
      customer_id: 36,
      order_date: "2024-06-06T13:57:50.000Z",
      subtotal: 276000,
      discount: 0,
      sale_tax: 27600,
      total: 303600
    },
    {
      order_id: 97,
      customer_id: 15,
      order_date: "2024-02-14T01:49:11.000Z",
      subtotal: 1458000,
      discount: 0,
      sale_tax: 145800,
      total: 1603800
    },
    {
      order_id: 108,
      customer_id: 19,
      order_date: "2024-04-23T05:35:40.000Z",
      subtotal: 924000,
      discount: 0,
      sale_tax: 92400,
      total: 1016400
    },
    {
      order_id: 59,
      customer_id: 14,
      order_date: "2024-08-02T10:31:55.000Z",
      subtotal: 3688000,
      discount: 0,
      sale_tax: 368800,
      total: 4056800
    },
    {
      order_id: 589,
      customer_id: 44,
      order_date: "2024-10-05T02:41:42.000Z",
      subtotal: 1026000,
      discount: 0,
      sale_tax: 102600,
      total: 1128600
    },
    {
      order_id: 127,
      customer_id: 17,
      order_date: "2024-03-13T19:49:49.000Z",
      subtotal: 3514000,
      discount: 0,
      sale_tax: 351400,
      total: 3865400
    },
    {
      order_id: 555,
      customer_id: 14,
      order_date: "2024-02-06T03:02:08.000Z",
      subtotal: 419000,
      discount: 0,
      sale_tax: 41900,
      total: 460900
    },
    {
      order_id: 682,
      customer_id: 16,
      order_date: "2024-11-18T11:50:37.000Z",
      subtotal: 2403000,
      discount: 0,
      sale_tax: 240300,
      total: 2643300
    },
    {
      order_id: 567,
      customer_id: 19,
      order_date: "2024-07-10T22:51:10.000Z",
      subtotal: 1790000,
      discount: 0,
      sale_tax: 179000,
      total: 1969000
    },
    {
      order_id: 329,
      customer_id: 8,
      order_date: "2024-02-29T05:30:15.000Z",
      subtotal: 2480000,
      discount: 0,
      sale_tax: 248000,
      total: 2728000
    },
    {
      order_id: 44,
      customer_id: 13,
      order_date: "2024-12-12T18:50:56.000Z",
      subtotal: 1455000,
      discount: 0,
      sale_tax: 145500,
      total: 1600500
    },
    {
      order_id: 816,
      customer_id: 24,
      order_date: "2024-05-18T06:46:10.000Z",
      subtotal: 3460000,
      discount: 0,
      sale_tax: 346000,
      total: 3806000
    },
    {
      order_id: 676,
      customer_id: 48,
      order_date: "2024-09-19T06:20:21.000Z",
      subtotal: 2682000,
      discount: 0,
      sale_tax: 268200,
      total: 2950200
    },
    {
      order_id: 153,
      customer_id: 17,
      order_date: "2024-12-19T18:12:18.000Z",
      subtotal: 118000,
      discount: 0,
      sale_tax: 11800,
      total: 129800
    },
    {
      order_id: 778,
      customer_id: 49,
      order_date: "2024-07-30T11:00:58.000Z",
      subtotal: 2119000,
      discount: 0,
      sale_tax: 211900,
      total: 2330900
    },
    {
      order_id: 507,
      customer_id: 26,
      order_date: "2024-02-24T09:34:29.000Z",
      subtotal: 1427000,
      discount: 0,
      sale_tax: 142700,
      total: 1569700
    },
    {
      order_id: 944,
      customer_id: 25,
      order_date: "2024-09-03T06:25:04.000Z",
      subtotal: 1197000,
      discount: 0,
      sale_tax: 119700,
      total: 1316700
    },
    {
      order_id: 214,
      customer_id: 20,
      order_date: "2024-12-19T20:54:25.000Z",
      subtotal: 145000,
      discount: 0,
      sale_tax: 14500,
      total: 159500
    },
    {
      order_id: 847,
      customer_id: 3,
      order_date: "2024-10-24T18:49:41.000Z",
      subtotal: 2332000,
      discount: 0,
      sale_tax: 233200,
      total: 2565200
    },
    {
      order_id: 419,
      customer_id: 2,
      order_date: "2024-08-14T19:46:57.000Z",
      subtotal: 1135000,
      discount: 0,
      sale_tax: 113500,
      total: 1248500
    },
    {
      order_id: 664,
      customer_id: 28,
      order_date: "2024-01-20T19:31:02.000Z",
      subtotal: 798000,
      discount: 0,
      sale_tax: 79800,
      total: 877800
    },
    {
      order_id: 551,
      customer_id: 11,
      order_date: "2024-04-03T14:44:29.000Z",
      subtotal: 2809000,
      discount: 0,
      sale_tax: 280900,
      total: 3089900
    },
    {
      order_id: 532,
      customer_id: 44,
      order_date: "2024-05-24T02:52:33.000Z",
      subtotal: 2876000,
      discount: 0,
      sale_tax: 287600,
      total: 3163600
    },
    {
      order_id: 945,
      customer_id: 44,
      order_date: "2024-01-13T03:44:12.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 948,
      customer_id: 17,
      order_date: "2024-09-26T10:38:53.000Z",
      subtotal: 527000,
      discount: 0,
      sale_tax: 52700,
      total: 579700
    },
    {
      order_id: 95,
      customer_id: 5,
      order_date: "2024-06-22T17:19:58.000Z",
      subtotal: 2395000,
      discount: 0,
      sale_tax: 239500,
      total: 2634500
    },
    {
      order_id: 259,
      customer_id: 20,
      order_date: "2024-06-28T19:04:33.000Z",
      subtotal: 1694000,
      discount: 0,
      sale_tax: 169400,
      total: 1863400
    },
    {
      order_id: 519,
      customer_id: 19,
      order_date: "2024-11-08T02:04:49.000Z",
      subtotal: 1457000,
      discount: 0,
      sale_tax: 145700,
      total: 1602700
    },
    {
      order_id: 965,
      customer_id: 12,
      order_date: "2024-05-18T10:36:39.000Z",
      subtotal: 158000,
      discount: 0,
      sale_tax: 15800,
      total: 173800
    },
    {
      order_id: 172,
      customer_id: 37,
      order_date: "2024-04-10T23:46:35.000Z",
      subtotal: 1845000,
      discount: 0,
      sale_tax: 184500,
      total: 2029500
    },
    {
      order_id: 409,
      customer_id: 10,
      order_date: "2024-12-11T17:06:18.000Z",
      subtotal: 784000,
      discount: 0,
      sale_tax: 78400,
      total: 862400
    },
    {
      order_id: 840,
      customer_id: 26,
      order_date: "2024-02-12T07:18:05.000Z",
      subtotal: 24000,
      discount: 0,
      sale_tax: 2400,
      total: 26400
    },
    {
      order_id: 30,
      customer_id: 40,
      order_date: "2024-06-28T09:40:08.000Z",
      subtotal: 1564000,
      discount: 0,
      sale_tax: 156400,
      total: 1720400
    },
    {
      order_id: 521,
      customer_id: 26,
      order_date: "2024-07-14T08:29:04.000Z",
      subtotal: 990000,
      discount: 0,
      sale_tax: 99000,
      total: 1089000
    },
    {
      order_id: 3,
      customer_id: 38,
      order_date: "2024-08-24T21:30:30.000Z",
      subtotal: 298000,
      discount: 0,
      sale_tax: 29800,
      total: 327800
    },
    {
      order_id: 936,
      customer_id: 23,
      order_date: "2024-08-20T12:43:22.000Z",
      subtotal: 3919000,
      discount: 0,
      sale_tax: 391900,
      total: 4310900
    },
    {
      order_id: 324,
      customer_id: 42,
      order_date: "2024-05-07T07:50:14.000Z",
      subtotal: 2984000,
      discount: 0,
      sale_tax: 298400,
      total: 3282400
    },
    {
      order_id: 981,
      customer_id: 21,
      order_date: "2024-05-06T15:32:08.000Z",
      subtotal: 1025000,
      discount: 0,
      sale_tax: 102500,
      total: 1127500
    },
    {
      order_id: 921,
      customer_id: 39,
      order_date: "2024-12-14T12:21:39.000Z",
      subtotal: 2055000,
      discount: 0,
      sale_tax: 205500,
      total: 2260500
    },
    {
      order_id: 249,
      customer_id: 9,
      order_date: "2024-08-13T03:11:42.000Z",
      subtotal: 256000,
      discount: 0,
      sale_tax: 25600,
      total: 281600
    },
    {
      order_id: 255,
      customer_id: 37,
      order_date: "2024-09-29T12:50:07.000Z",
      subtotal: 3802000,
      discount: 0,
      sale_tax: 380200,
      total: 4182200
    },
    {
      order_id: 984,
      customer_id: 14,
      order_date: "2024-01-18T18:49:49.000Z",
      subtotal: 1765000,
      discount: 0,
      sale_tax: 176500,
      total: 1941500
    },
    {
      order_id: 639,
      customer_id: 24,
      order_date: "2024-11-28T20:54:09.000Z",
      subtotal: 2579000,
      discount: 0,
      sale_tax: 257900,
      total: 2836900
    },
    {
      order_id: 296,
      customer_id: 12,
      order_date: "2024-05-26T19:29:58.000Z",
      subtotal: 2243000,
      discount: 0,
      sale_tax: 224300,
      total: 2467300
    },
    {
      order_id: 209,
      customer_id: 5,
      order_date: "2024-05-28T01:27:14.000Z",
      subtotal: 165000,
      discount: 0,
      sale_tax: 16500,
      total: 181500
    },
    {
      order_id: 74,
      customer_id: 17,
      order_date: "2024-01-28T08:50:21.000Z",
      subtotal: 798000,
      discount: 0,
      sale_tax: 79800,
      total: 877800
    },
    {
      order_id: 937,
      customer_id: 33,
      order_date: "2024-08-13T01:21:02.000Z",
      subtotal: 3146000,
      discount: 0,
      sale_tax: 314600,
      total: 3460600
    },
    {
      order_id: 868,
      customer_id: 22,
      order_date: "2024-08-25T05:12:44.000Z",
      subtotal: 3222000,
      discount: 0,
      sale_tax: 322200,
      total: 3544200
    },
    {
      order_id: 138,
      customer_id: 8,
      order_date: "2024-07-11T10:11:54.000Z",
      subtotal: 1848000,
      discount: 0,
      sale_tax: 184800,
      total: 2032800
    },
    {
      order_id: 34,
      customer_id: 34,
      order_date: "2024-12-05T07:44:24.000Z",
      subtotal: 1454000,
      discount: 0,
      sale_tax: 145400,
      total: 1599400
    },
    {
      order_id: 418,
      customer_id: 30,
      order_date: "2024-11-27T06:21:19.000Z",
      subtotal: 852000,
      discount: 0,
      sale_tax: 85200,
      total: 937200
    },
    {
      order_id: 947,
      customer_id: 44,
      order_date: "2024-09-08T11:27:11.000Z",
      subtotal: 1970000,
      discount: 0,
      sale_tax: 197000,
      total: 2167000
    },
    {
      order_id: 978,
      customer_id: 10,
      order_date: "2024-09-22T15:17:16.000Z",
      subtotal: 2017000,
      discount: 0,
      sale_tax: 201700,
      total: 2218700
    },
    {
      order_id: 972,
      customer_id: 48,
      order_date: "2024-08-02T19:47:32.000Z",
      subtotal: 1923000,
      discount: 0,
      sale_tax: 192300,
      total: 2115300
    },
    {
      order_id: 761,
      customer_id: 11,
      order_date: "2024-01-10T10:27:34.000Z",
      subtotal: 2345000,
      discount: 0,
      sale_tax: 234500,
      total: 2579500
    },
    {
      order_id: 407,
      customer_id: 10,
      order_date: "2024-02-28T10:34:25.000Z",
      subtotal: 2435000,
      discount: 0,
      sale_tax: 243500,
      total: 2678500
    },
    {
      order_id: 90,
      customer_id: 23,
      order_date: "2024-03-07T18:30:18.000Z",
      subtotal: 609000,
      discount: 0,
      sale_tax: 60900,
      total: 669900
    },
    {
      order_id: 904,
      customer_id: 16,
      order_date: "2024-04-18T08:19:29.000Z",
      subtotal: 633000,
      discount: 0,
      sale_tax: 63300,
      total: 696300
    },
    {
      order_id: 443,
      customer_id: 37,
      order_date: "2024-07-04T23:26:30.000Z",
      subtotal: 910000,
      discount: 0,
      sale_tax: 91000,
      total: 1001000
    },
    {
      order_id: 387,
      customer_id: 48,
      order_date: "2024-10-17T09:46:45.000Z",
      subtotal: 546000,
      discount: 0,
      sale_tax: 54600,
      total: 600600
    },
    {
      order_id: 39,
      customer_id: 6,
      order_date: "2024-09-21T22:42:51.000Z",
      subtotal: 209000,
      discount: 0,
      sale_tax: 20900,
      total: 229900
    },
    {
      order_id: 690,
      customer_id: 5,
      order_date: "2024-12-23T20:01:10.000Z",
      subtotal: 5592000,
      discount: 0,
      sale_tax: 559200,
      total: 6151200
    },
    {
      order_id: 526,
      customer_id: 26,
      order_date: "2024-11-09T18:36:24.000Z",
      subtotal: 2067000,
      discount: 0,
      sale_tax: 206700,
      total: 2273700
    },
    {
      order_id: 393,
      customer_id: 44,
      order_date: "2024-04-22T11:44:58.000Z",
      subtotal: 4840000,
      discount: 0,
      sale_tax: 484000,
      total: 5324000
    },
    {
      order_id: 524,
      customer_id: 3,
      order_date: "2024-05-12T01:39:23.000Z",
      subtotal: 951000,
      discount: 0,
      sale_tax: 95100,
      total: 1046100
    },
    {
      order_id: 312,
      customer_id: 7,
      order_date: "2024-04-19T05:09:34.000Z",
      subtotal: 1852000,
      discount: 0,
      sale_tax: 185200,
      total: 2037200
    },
    {
      order_id: 498,
      customer_id: 37,
      order_date: "2024-03-19T22:58:53.000Z",
      subtotal: 2491000,
      discount: 0,
      sale_tax: 249100,
      total: 2740100
    },
    {
      order_id: 862,
      customer_id: 13,
      order_date: "2024-02-22T02:32:19.000Z",
      subtotal: 369000,
      discount: 0,
      sale_tax: 36900,
      total: 405900
    },
    {
      order_id: 494,
      customer_id: 27,
      order_date: "2024-02-12T17:49:51.000Z",
      subtotal: 898000,
      discount: 0,
      sale_tax: 89800,
      total: 987800
    },
    {
      order_id: 469,
      customer_id: 49,
      order_date: "2024-08-05T11:25:37.000Z",
      subtotal: 276000,
      discount: 0,
      sale_tax: 27600,
      total: 303600
    },
    {
      order_id: 683,
      customer_id: 49,
      order_date: "2024-06-27T12:52:33.000Z",
      subtotal: 1247000,
      discount: 0,
      sale_tax: 124700,
      total: 1371700
    },
    {
      order_id: 118,
      customer_id: 12,
      order_date: "2024-01-19T18:00:45.000Z",
      subtotal: 743000,
      discount: 0,
      sale_tax: 74300,
      total: 817300
    },
    {
      order_id: 793,
      customer_id: 10,
      order_date: "2024-10-31T17:45:21.000Z",
      subtotal: 2536000,
      discount: 0,
      sale_tax: 253600,
      total: 2789600
    },
    {
      order_id: 608,
      customer_id: 37,
      order_date: "2024-02-11T09:22:38.000Z",
      subtotal: 1364000,
      discount: 0,
      sale_tax: 136400,
      total: 1500400
    },
    {
      order_id: 317,
      customer_id: 30,
      order_date: "2024-02-03T08:32:56.000Z",
      subtotal: 1184000,
      discount: 0,
      sale_tax: 118400,
      total: 1302400
    },
    {
      order_id: 702,
      customer_id: 9,
      order_date: "2024-09-20T05:48:15.000Z",
      subtotal: 698000,
      discount: 0,
      sale_tax: 69800,
      total: 767800
    },
    {
      order_id: 488,
      customer_id: 41,
      order_date: "2024-05-11T19:02:37.000Z",
      subtotal: 2742000,
      discount: 0,
      sale_tax: 274200,
      total: 3016200
    },
    {
      order_id: 126,
      customer_id: 17,
      order_date: "2024-06-16T22:22:52.000Z",
      subtotal: 1558000,
      discount: 0,
      sale_tax: 155800,
      total: 1713800
    },
    {
      order_id: 194,
      customer_id: 30,
      order_date: "2024-06-27T03:30:48.000Z",
      subtotal: 734000,
      discount: 0,
      sale_tax: 73400,
      total: 807400
    },
    {
      order_id: 360,
      customer_id: 21,
      order_date: "2024-06-06T13:54:41.000Z",
      subtotal: 229000,
      discount: 0,
      sale_tax: 22900,
      total: 251900
    },
    {
      order_id: 463,
      customer_id: 47,
      order_date: "2024-08-20T19:50:46.000Z",
      subtotal: 2867000,
      discount: 0,
      sale_tax: 286700,
      total: 3153700
    },
    {
      order_id: 476,
      customer_id: 29,
      order_date: "2024-03-30T18:17:33.000Z",
      subtotal: 1592000,
      discount: 0,
      sale_tax: 159200,
      total: 1751200
    },
    {
      order_id: 99,
      customer_id: 23,
      order_date: "2024-10-23T18:19:36.000Z",
      subtotal: 3567000,
      discount: 0,
      sale_tax: 356700,
      total: 3923700
    },
    {
      order_id: 883,
      customer_id: 5,
      order_date: "2024-03-06T04:00:35.000Z",
      subtotal: 223000,
      discount: 0,
      sale_tax: 22300,
      total: 245300
    },
    {
      order_id: 629,
      customer_id: 36,
      order_date: "2024-11-22T02:36:23.000Z",
      subtotal: 2711000,
      discount: 0,
      sale_tax: 271100,
      total: 2982100
    },
    {
      order_id: 726,
      customer_id: 47,
      order_date: "2024-12-06T12:37:20.000Z",
      subtotal: 349000,
      discount: 0,
      sale_tax: 34900,
      total: 383900
    },
    {
      order_id: 374,
      customer_id: 43,
      order_date: "2024-06-04T02:33:02.000Z",
      subtotal: 648000,
      discount: 0,
      sale_tax: 64800,
      total: 712800
    },
    {
      order_id: 224,
      customer_id: 27,
      order_date: "2024-06-12T19:46:06.000Z",
      subtotal: 2989000,
      discount: 0,
      sale_tax: 298900,
      total: 3287900
    },
    {
      order_id: 719,
      customer_id: 1,
      order_date: "2024-08-24T13:53:40.000Z",
      subtotal: 1134000,
      discount: 0,
      sale_tax: 113400,
      total: 1247400
    },
    {
      order_id: 756,
      customer_id: 19,
      order_date: "2024-09-18T03:08:57.000Z",
      subtotal: 1684000,
      discount: 0,
      sale_tax: 168400,
      total: 1852400
    },
    {
      order_id: 318,
      customer_id: 9,
      order_date: "2024-12-22T20:18:06.000Z",
      subtotal: 837000,
      discount: 0,
      sale_tax: 83700,
      total: 920700
    },
    {
      order_id: 933,
      customer_id: 6,
      order_date: "2024-01-24T14:27:10.000Z",
      subtotal: 738000,
      discount: 0,
      sale_tax: 73800,
      total: 811800
    },
    {
      order_id: 647,
      customer_id: 37,
      order_date: "2024-08-29T20:35:12.000Z",
      subtotal: 444000,
      discount: 0,
      sale_tax: 44400,
      total: 488400
    },
    {
      order_id: 442,
      customer_id: 9,
      order_date: "2024-06-28T04:30:03.000Z",
      subtotal: 290000,
      discount: 0,
      sale_tax: 29000,
      total: 319000
    },
    {
      order_id: 354,
      customer_id: 6,
      order_date: "2024-02-26T23:45:50.000Z",
      subtotal: 805000,
      discount: 0,
      sale_tax: 80500,
      total: 885500
    },
    {
      order_id: 593,
      customer_id: 12,
      order_date: "2024-12-03T22:01:28.000Z",
      subtotal: 4018000,
      discount: 0,
      sale_tax: 401800,
      total: 4419800
    },
    {
      order_id: 12,
      customer_id: 14,
      order_date: "2024-03-29T07:54:37.000Z",
      subtotal: 474000,
      discount: 0,
      sale_tax: 47400,
      total: 521400
    },
    {
      order_id: 479,
      customer_id: 29,
      order_date: "2024-09-18T17:32:33.000Z",
      subtotal: 3161000,
      discount: 0,
      sale_tax: 316100,
      total: 3477100
    },
    {
      order_id: 293,
      customer_id: 49,
      order_date: "2024-04-10T02:34:02.000Z",
      subtotal: 416000,
      discount: 0,
      sale_tax: 41600,
      total: 457600
    },
    {
      order_id: 495,
      customer_id: 37,
      order_date: "2024-01-15T19:10:41.000Z",
      subtotal: 1065000,
      discount: 0,
      sale_tax: 106500,
      total: 1171500
    },
    {
      order_id: 154,
      customer_id: 29,
      order_date: "2024-05-14T20:56:05.000Z",
      subtotal: 3428000,
      discount: 0,
      sale_tax: 342800,
      total: 3770800
    },
    {
      order_id: 657,
      customer_id: 41,
      order_date: "2024-06-27T10:13:47.000Z",
      subtotal: 806000,
      discount: 0,
      sale_tax: 80600,
      total: 886600
    },
    {
      order_id: 234,
      customer_id: 26,
      order_date: "2024-09-04T18:31:44.000Z",
      subtotal: 499000,
      discount: 0,
      sale_tax: 49900,
      total: 548900
    },
    {
      order_id: 474,
      customer_id: 30,
      order_date: "2024-03-01T10:14:09.000Z",
      subtotal: 1389000,
      discount: 0,
      sale_tax: 138900,
      total: 1527900
    },
    {
      order_id: 899,
      customer_id: 36,
      order_date: "2024-06-24T14:26:20.000Z",
      subtotal: 499000,
      discount: 0,
      sale_tax: 49900,
      total: 548900
    },
    {
      order_id: 935,
      customer_id: 19,
      order_date: "2024-06-23T08:54:41.000Z",
      subtotal: 672000,
      discount: 0,
      sale_tax: 67200,
      total: 739200
    },
    {
      order_id: 748,
      customer_id: 33,
      order_date: "2024-02-26T10:43:38.000Z",
      subtotal: 415000,
      discount: 0,
      sale_tax: 41500,
      total: 456500
    },
    {
      order_id: 675,
      customer_id: 24,
      order_date: "2024-10-09T06:34:46.000Z",
      subtotal: 980000,
      discount: 0,
      sale_tax: 98000,
      total: 1078000
    },
    {
      order_id: 696,
      customer_id: 1,
      order_date: "2024-07-15T20:04:53.000Z",
      subtotal: 687000,
      discount: 0,
      sale_tax: 68700,
      total: 755700
    },
    {
      order_id: 969,
      customer_id: 42,
      order_date: "2024-02-27T04:11:00.000Z",
      subtotal: 1640000,
      discount: 0,
      sale_tax: 164000,
      total: 1804000
    },
    {
      order_id: 264,
      customer_id: 18,
      order_date: "2024-10-18T07:40:49.000Z",
      subtotal: 2027000,
      discount: 0,
      sale_tax: 202700,
      total: 2229700
    },
    {
      order_id: 270,
      customer_id: 42,
      order_date: "2024-07-08T08:30:12.000Z",
      subtotal: 287000,
      discount: 0,
      sale_tax: 28700,
      total: 315700
    },
    {
      order_id: 898,
      customer_id: 24,
      order_date: "2024-10-28T08:51:37.000Z",
      subtotal: 2870000,
      discount: 0,
      sale_tax: 287000,
      total: 3157000
    },
    {
      order_id: 435,
      customer_id: 23,
      order_date: "2024-04-16T02:09:37.000Z",
      subtotal: 638000,
      discount: 0,
      sale_tax: 63800,
      total: 701800
    },
    {
      order_id: 384,
      customer_id: 5,
      order_date: "2024-12-04T17:48:44.000Z",
      subtotal: 150000,
      discount: 0,
      sale_tax: 15000,
      total: 165000
    },
    {
      order_id: 351,
      customer_id: 11,
      order_date: "2024-08-01T19:14:14.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 116,
      customer_id: 38,
      order_date: "2024-08-02T15:42:54.000Z",
      subtotal: 2846000,
      discount: 0,
      sale_tax: 284600,
      total: 3130600
    },
    {
      order_id: 970,
      customer_id: 21,
      order_date: "2024-01-27T05:58:01.000Z",
      subtotal: 1115000,
      discount: 0,
      sale_tax: 111500,
      total: 1226500
    },
    {
      order_id: 732,
      customer_id: 48,
      order_date: "2024-09-23T10:22:35.000Z",
      subtotal: 128000,
      discount: 0,
      sale_tax: 12800,
      total: 140800
    },
    {
      order_id: 837,
      customer_id: 23,
      order_date: "2024-09-02T06:33:42.000Z",
      subtotal: 3305000,
      discount: 0,
      sale_tax: 330500,
      total: 3635500
    },
    {
      order_id: 826,
      customer_id: 37,
      order_date: "2024-01-03T12:48:09.000Z",
      subtotal: 966000,
      discount: 0,
      sale_tax: 96600,
      total: 1062600
    },
    {
      order_id: 431,
      customer_id: 24,
      order_date: "2024-12-01T08:09:51.000Z",
      subtotal: 1886000,
      discount: 0,
      sale_tax: 188600,
      total: 2074600
    },
    {
      order_id: 911,
      customer_id: 7,
      order_date: "2024-09-27T10:17:04.000Z",
      subtotal: 92000,
      discount: 0,
      sale_tax: 9200,
      total: 101200
    },
    {
      order_id: 491,
      customer_id: 20,
      order_date: "2024-11-04T07:36:15.000Z",
      subtotal: 686000,
      discount: 0,
      sale_tax: 68600,
      total: 754600
    },
    {
      order_id: 462,
      customer_id: 29,
      order_date: "2024-02-08T08:39:04.000Z",
      subtotal: 465000,
      discount: 0,
      sale_tax: 46500,
      total: 511500
    },
    {
      order_id: 734,
      customer_id: 2,
      order_date: "2024-08-14T06:41:01.000Z",
      subtotal: 147000,
      discount: 0,
      sale_tax: 14700,
      total: 161700
    },
    {
      order_id: 855,
      customer_id: 43,
      order_date: "2024-03-18T05:30:26.000Z",
      subtotal: 3331000,
      discount: 0,
      sale_tax: 333100,
      total: 3664100
    },
    {
      order_id: 436,
      customer_id: 41,
      order_date: "2024-03-20T03:20:16.000Z",
      subtotal: 463000,
      discount: 0,
      sale_tax: 46300,
      total: 509300
    },
    {
      order_id: 180,
      customer_id: 25,
      order_date: "2024-12-16T07:20:48.000Z",
      subtotal: 495000,
      discount: 0,
      sale_tax: 49500,
      total: 544500
    },
    {
      order_id: 967,
      customer_id: 41,
      order_date: "2024-07-13T17:48:15.000Z",
      subtotal: 1225000,
      discount: 0,
      sale_tax: 122500,
      total: 1347500
    },
    {
      order_id: 870,
      customer_id: 24,
      order_date: "2024-01-09T09:07:15.000Z",
      subtotal: 2453000,
      discount: 0,
      sale_tax: 245300,
      total: 2698300
    },
    {
      order_id: 626,
      customer_id: 2,
      order_date: "2024-12-05T00:11:36.000Z",
      subtotal: 1796000,
      discount: 0,
      sale_tax: 179600,
      total: 1975600
    },
    {
      order_id: 263,
      customer_id: 5,
      order_date: "2024-07-18T15:26:33.000Z",
      subtotal: 319000,
      discount: 0,
      sale_tax: 31900,
      total: 350900
    },
    {
      order_id: 836,
      customer_id: 9,
      order_date: "2024-06-13T01:54:23.000Z",
      subtotal: 1766000,
      discount: 0,
      sale_tax: 176600,
      total: 1942600
    },
    {
      order_id: 784,
      customer_id: 43,
      order_date: "2024-06-10T11:26:23.000Z",
      subtotal: 1312000,
      discount: 0,
      sale_tax: 131200,
      total: 1443200
    },
    {
      order_id: 711,
      customer_id: 12,
      order_date: "2024-05-18T10:13:04.000Z",
      subtotal: 324000,
      discount: 0,
      sale_tax: 32400,
      total: 356400
    },
    {
      order_id: 470,
      customer_id: 3,
      order_date: "2024-03-01T10:20:39.000Z",
      subtotal: 1534000,
      discount: 0,
      sale_tax: 153400,
      total: 1687400
    },
    {
      order_id: 780,
      customer_id: 10,
      order_date: "2024-05-21T11:50:12.000Z",
      subtotal: 4024000,
      discount: 0,
      sale_tax: 402400,
      total: 4426400
    },
    {
      order_id: 768,
      customer_id: 2,
      order_date: "2024-08-16T22:17:32.000Z",
      subtotal: 158000,
      discount: 0,
      sale_tax: 15800,
      total: 173800
    },
    {
      order_id: 838,
      customer_id: 43,
      order_date: "2024-11-22T05:03:47.000Z",
      subtotal: 2028000,
      discount: 0,
      sale_tax: 202800,
      total: 2230800
    },
    {
      order_id: 478,
      customer_id: 34,
      order_date: "2024-10-26T17:46:58.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 149,
      customer_id: 47,
      order_date: "2024-06-11T10:35:06.000Z",
      subtotal: 318000,
      discount: 0,
      sale_tax: 31800,
      total: 349800
    },
    {
      order_id: 577,
      customer_id: 39,
      order_date: "2024-02-24T08:23:31.000Z",
      subtotal: 169000,
      discount: 0,
      sale_tax: 16900,
      total: 185900
    },
    {
      order_id: 505,
      customer_id: 17,
      order_date: "2024-11-09T18:54:27.000Z",
      subtotal: 3462000,
      discount: 0,
      sale_tax: 346200,
      total: 3808200
    },
    {
      order_id: 280,
      customer_id: 37,
      order_date: "2024-12-02T03:21:33.000Z",
      subtotal: 1149000,
      discount: 0,
      sale_tax: 114900,
      total: 1263900
    },
    {
      order_id: 88,
      customer_id: 37,
      order_date: "2024-02-06T12:48:45.000Z",
      subtotal: 738000,
      discount: 0,
      sale_tax: 73800,
      total: 811800
    },
    {
      order_id: 188,
      customer_id: 7,
      order_date: "2024-04-23T19:50:16.000Z",
      subtotal: 1914000,
      discount: 0,
      sale_tax: 191400,
      total: 2105400
    },
    {
      order_id: 461,
      customer_id: 34,
      order_date: "2024-07-11T04:42:20.000Z",
      subtotal: 1075000,
      discount: 0,
      sale_tax: 107500,
      total: 1182500
    },
    {
      order_id: 240,
      customer_id: 10,
      order_date: "2024-05-08T23:16:40.000Z",
      subtotal: 1201000,
      discount: 0,
      sale_tax: 120100,
      total: 1321100
    },
    {
      order_id: 328,
      customer_id: 4,
      order_date: "2024-03-02T10:13:30.000Z",
      subtotal: 358000,
      discount: 0,
      sale_tax: 35800,
      total: 393800
    },
    {
      order_id: 717,
      customer_id: 33,
      order_date: "2024-03-30T17:07:48.000Z",
      subtotal: 1420000,
      discount: 0,
      sale_tax: 142000,
      total: 1562000
    },
    {
      order_id: 525,
      customer_id: 11,
      order_date: "2024-08-16T20:15:36.000Z",
      subtotal: 1291000,
      discount: 0,
      sale_tax: 129100,
      total: 1420100
    },
    {
      order_id: 634,
      customer_id: 43,
      order_date: "2024-04-01T09:37:51.000Z",
      subtotal: 4273000,
      discount: 0,
      sale_tax: 427300,
      total: 4700300
    },
    {
      order_id: 650,
      customer_id: 41,
      order_date: "2024-03-23T20:34:21.000Z",
      subtotal: 1076000,
      discount: 0,
      sale_tax: 107600,
      total: 1183600
    },
    {
      order_id: 703,
      customer_id: 10,
      order_date: "2024-10-21T03:04:01.000Z",
      subtotal: 889000,
      discount: 0,
      sale_tax: 88900,
      total: 977900
    },
    {
      order_id: 226,
      customer_id: 15,
      order_date: "2024-12-09T23:27:37.000Z",
      subtotal: 100000,
      discount: 0,
      sale_tax: 10000,
      total: 110000
    },
    {
      order_id: 210,
      customer_id: 36,
      order_date: "2024-03-01T05:58:27.000Z",
      subtotal: 2009000,
      discount: 0,
      sale_tax: 200900,
      total: 2209900
    },
    {
      order_id: 843,
      customer_id: 25,
      order_date: "2024-05-16T03:00:35.000Z",
      subtotal: 294000,
      discount: 0,
      sale_tax: 29400,
      total: 323400
    },
    {
      order_id: 710,
      customer_id: 33,
      order_date: "2024-08-13T19:37:08.000Z",
      subtotal: 1247000,
      discount: 0,
      sale_tax: 124700,
      total: 1371700
    },
    {
      order_id: 48,
      customer_id: 45,
      order_date: "2024-06-16T09:53:15.000Z",
      subtotal: 709000,
      discount: 0,
      sale_tax: 70900,
      total: 779900
    },
    {
      order_id: 447,
      customer_id: 1,
      order_date: "2024-04-14T15:17:54.000Z",
      subtotal: 840000,
      discount: 0,
      sale_tax: 84000,
      total: 924000
    },
    {
      order_id: 298,
      customer_id: 11,
      order_date: "2024-01-06T08:27:29.000Z",
      subtotal: 880000,
      discount: 0,
      sale_tax: 88000,
      total: 968000
    },
    {
      order_id: 81,
      customer_id: 11,
      order_date: "2024-05-23T23:12:56.000Z",
      subtotal: 3155000,
      discount: 0,
      sale_tax: 315500,
      total: 3470500
    },
    {
      order_id: 954,
      customer_id: 21,
      order_date: "2024-03-29T11:38:05.000Z",
      subtotal: 1898000,
      discount: 0,
      sale_tax: 189800,
      total: 2087800
    },
    {
      order_id: 800,
      customer_id: 16,
      order_date: "2024-06-16T04:47:38.000Z",
      subtotal: 3316000,
      discount: 0,
      sale_tax: 331600,
      total: 3647600
    },
    {
      order_id: 204,
      customer_id: 4,
      order_date: "2024-09-14T02:03:54.000Z",
      subtotal: 148000,
      discount: 0,
      sale_tax: 14800,
      total: 162800
    },
    {
      order_id: 5,
      customer_id: 40,
      order_date: "2024-10-30T10:21:29.000Z",
      subtotal: 1090000,
      discount: 0,
      sale_tax: 109000,
      total: 1199000
    },
    {
      order_id: 456,
      customer_id: 36,
      order_date: "2024-05-18T12:06:16.000Z",
      subtotal: 1465000,
      discount: 0,
      sale_tax: 146500,
      total: 1611500
    },
    {
      order_id: 796,
      customer_id: 39,
      order_date: "2024-03-15T10:25:40.000Z",
      subtotal: 319000,
      discount: 0,
      sale_tax: 31900,
      total: 350900
    },
    {
      order_id: 531,
      customer_id: 43,
      order_date: "2024-10-09T08:38:29.000Z",
      subtotal: 891000,
      discount: 0,
      sale_tax: 89100,
      total: 980100
    },
    {
      order_id: 283,
      customer_id: 47,
      order_date: "2024-05-10T17:45:19.000Z",
      subtotal: 1056000,
      discount: 0,
      sale_tax: 105600,
      total: 1161600
    },
    {
      order_id: 807,
      customer_id: 17,
      order_date: "2024-09-17T14:45:06.000Z",
      subtotal: 149000,
      discount: 0,
      sale_tax: 14900,
      total: 163900
    },
    {
      order_id: 624,
      customer_id: 35,
      order_date: "2024-12-30T10:24:19.000Z",
      subtotal: 2475000,
      discount: 0,
      sale_tax: 247500,
      total: 2722500
    },
    {
      order_id: 546,
      customer_id: 14,
      order_date: "2024-05-26T03:05:25.000Z",
      subtotal: 680000,
      discount: 0,
      sale_tax: 68000,
      total: 748000
    },
    {
      order_id: 686,
      customer_id: 32,
      order_date: "2024-10-01T15:23:22.000Z",
      subtotal: 1302000,
      discount: 0,
      sale_tax: 130200,
      total: 1432200
    },
    {
      order_id: 297,
      customer_id: 27,
      order_date: "2024-09-12T22:10:20.000Z",
      subtotal: 1278000,
      discount: 0,
      sale_tax: 127800,
      total: 1405800
    },
    {
      order_id: 681,
      customer_id: 17,
      order_date: "2024-12-08T20:57:19.000Z",
      subtotal: 1093000,
      discount: 0,
      sale_tax: 109300,
      total: 1202300
    },
    {
      order_id: 361,
      customer_id: 16,
      order_date: "2024-02-26T18:11:40.000Z",
      subtotal: 507000,
      discount: 0,
      sale_tax: 50700,
      total: 557700
    },
    {
      order_id: 303,
      customer_id: 34,
      order_date: "2024-05-05T06:08:06.000Z",
      subtotal: 891000,
      discount: 0,
      sale_tax: 89100,
      total: 980100
    },
    {
      order_id: 974,
      customer_id: 25,
      order_date: "2024-12-29T09:32:26.000Z",
      subtotal: 1079000,
      discount: 0,
      sale_tax: 107900,
      total: 1186900
    },
    {
      order_id: 829,
      customer_id: 9,
      order_date: "2024-02-13T17:27:13.000Z",
      subtotal: 1339000,
      discount: 0,
      sale_tax: 133900,
      total: 1472900
    },
    {
      order_id: 785,
      customer_id: 14,
      order_date: "2024-06-17T14:19:01.000Z",
      subtotal: 1976000,
      discount: 0,
      sale_tax: 197600,
      total: 2173600
    },
    {
      order_id: 643,
      customer_id: 33,
      order_date: "2024-08-27T08:57:20.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 472,
      customer_id: 31,
      order_date: "2024-01-18T06:04:55.000Z",
      subtotal: 719000,
      discount: 0,
      sale_tax: 71900,
      total: 790900
    },
    {
      order_id: 444,
      customer_id: 11,
      order_date: "2024-12-09T13:54:58.000Z",
      subtotal: 2064000,
      discount: 0,
      sale_tax: 206400,
      total: 2270400
    },
    {
      order_id: 537,
      customer_id: 11,
      order_date: "2024-08-01T17:48:32.000Z",
      subtotal: 644000,
      discount: 0,
      sale_tax: 64400,
      total: 708400
    },
    {
      order_id: 233,
      customer_id: 11,
      order_date: "2024-08-30T00:28:00.000Z",
      subtotal: 150000,
      discount: 0,
      sale_tax: 15000,
      total: 165000
    },
    {
      order_id: 93,
      customer_id: 8,
      order_date: "2024-05-07T00:50:49.000Z",
      subtotal: 1368000,
      discount: 0,
      sale_tax: 136800,
      total: 1504800
    },
    {
      order_id: 89,
      customer_id: 38,
      order_date: "2024-09-08T00:00:53.000Z",
      subtotal: 199000,
      discount: 0,
      sale_tax: 19900,
      total: 218900
    },
    {
      order_id: 373,
      customer_id: 10,
      order_date: "2024-12-24T03:22:26.000Z",
      subtotal: 3057000,
      discount: 0,
      sale_tax: 305700,
      total: 3362700
    },
    {
      order_id: 252,
      customer_id: 33,
      order_date: "2024-07-05T08:38:33.000Z",
      subtotal: 72000,
      discount: 0,
      sale_tax: 7200,
      total: 79200
    },
    {
      order_id: 343,
      customer_id: 1,
      order_date: "2024-05-21T06:41:44.000Z",
      subtotal: 441000,
      discount: 0,
      sale_tax: 44100,
      total: 485100
    },
    {
      order_id: 31,
      customer_id: 43,
      order_date: "2024-05-22T04:50:50.000Z",
      subtotal: 322000,
      discount: 0,
      sale_tax: 32200,
      total: 354200
    },
    {
      order_id: 723,
      customer_id: 35,
      order_date: "2024-02-07T21:09:49.000Z",
      subtotal: 2982000,
      discount: 0,
      sale_tax: 298200,
      total: 3280200
    },
    {
      order_id: 497,
      customer_id: 6,
      order_date: "2024-04-01T13:53:58.000Z",
      subtotal: 1330000,
      discount: 0,
      sale_tax: 133000,
      total: 1463000
    },
    {
      order_id: 884,
      customer_id: 47,
      order_date: "2024-12-24T13:11:47.000Z",
      subtotal: 966000,
      discount: 0,
      sale_tax: 96600,
      total: 1062600
    },
    {
      order_id: 155,
      customer_id: 39,
      order_date: "2024-06-10T08:52:31.000Z",
      subtotal: 294000,
      discount: 0,
      sale_tax: 29400,
      total: 323400
    },
    {
      order_id: 722,
      customer_id: 20,
      order_date: "2024-08-21T03:28:07.000Z",
      subtotal: 1380000,
      discount: 0,
      sale_tax: 138000,
      total: 1518000
    },
    {
      order_id: 953,
      customer_id: 44,
      order_date: "2024-12-13T07:18:42.000Z",
      subtotal: 1746000,
      discount: 0,
      sale_tax: 174600,
      total: 1920600
    },
    {
      order_id: 609,
      customer_id: 49,
      order_date: "2024-02-03T08:41:23.000Z",
      subtotal: 2031000,
      discount: 0,
      sale_tax: 203100,
      total: 2234100
    },
    {
      order_id: 416,
      customer_id: 49,
      order_date: "2024-02-05T20:28:44.000Z",
      subtotal: 1244000,
      discount: 0,
      sale_tax: 124400,
      total: 1368400
    },
    {
      order_id: 195,
      customer_id: 12,
      order_date: "2024-12-01T01:56:11.000Z",
      subtotal: 149000,
      discount: 0,
      sale_tax: 14900,
      total: 163900
    },
    {
      order_id: 199,
      customer_id: 28,
      order_date: "2024-11-27T08:55:31.000Z",
      subtotal: 4221000,
      discount: 0,
      sale_tax: 422100,
      total: 4643100
    },
    {
      order_id: 369,
      customer_id: 32,
      order_date: "2024-11-22T01:56:11.000Z",
      subtotal: 1197000,
      discount: 0,
      sale_tax: 119700,
      total: 1316700
    },
    {
      order_id: 441,
      customer_id: 18,
      order_date: "2024-10-08T06:37:37.000Z",
      subtotal: 1174000,
      discount: 0,
      sale_tax: 117400,
      total: 1291400
    },
    {
      order_id: 243,
      customer_id: 19,
      order_date: "2024-07-08T21:23:40.000Z",
      subtotal: 1202000,
      discount: 0,
      sale_tax: 120200,
      total: 1322200
    },
    {
      order_id: 902,
      customer_id: 23,
      order_date: "2024-02-26T23:29:46.000Z",
      subtotal: 960000,
      discount: 0,
      sale_tax: 96000,
      total: 1056000
    },
    {
      order_id: 740,
      customer_id: 33,
      order_date: "2024-12-12T12:16:07.000Z",
      subtotal: 145000,
      discount: 0,
      sale_tax: 14500,
      total: 159500
    },
    {
      order_id: 892,
      customer_id: 20,
      order_date: "2024-12-26T08:45:35.000Z",
      subtotal: 99000,
      discount: 0,
      sale_tax: 9900,
      total: 108900
    },
    {
      order_id: 856,
      customer_id: 26,
      order_date: "2024-07-25T08:42:07.000Z",
      subtotal: 435000,
      discount: 0,
      sale_tax: 43500,
      total: 478500
    },
    {
      order_id: 230,
      customer_id: 20,
      order_date: "2024-09-20T07:07:36.000Z",
      subtotal: 3025000,
      discount: 0,
      sale_tax: 302500,
      total: 3327500
    },
    {
      order_id: 503,
      customer_id: 9,
      order_date: "2024-04-18T06:38:41.000Z",
      subtotal: 2074000,
      discount: 0,
      sale_tax: 207400,
      total: 2281400
    },
    {
      order_id: 78,
      customer_id: 1,
      order_date: "2024-03-07T01:33:51.000Z",
      subtotal: 3113000,
      discount: 0,
      sale_tax: 311300,
      total: 3424300
    },
    {
      order_id: 573,
      customer_id: 6,
      order_date: "2024-10-03T14:15:11.000Z",
      subtotal: 1122000,
      discount: 0,
      sale_tax: 112200,
      total: 1234200
    },
    {
      order_id: 994,
      customer_id: 25,
      order_date: "2024-08-23T01:44:45.000Z",
      subtotal: 1885000,
      discount: 0,
      sale_tax: 188500,
      total: 2073500
    },
    {
      order_id: 987,
      customer_id: 23,
      order_date: "2024-08-11T01:06:48.000Z",
      subtotal: 578000,
      discount: 0,
      sale_tax: 57800,
      total: 635800
    },
    {
      order_id: 852,
      customer_id: 2,
      order_date: "2024-10-27T03:07:00.000Z",
      subtotal: 2542000,
      discount: 0,
      sale_tax: 254200,
      total: 2796200
    },
    {
      order_id: 250,
      customer_id: 25,
      order_date: "2024-08-08T21:25:02.000Z",
      subtotal: 2599000,
      discount: 0,
      sale_tax: 259900,
      total: 2858900
    },
    {
      order_id: 611,
      customer_id: 42,
      order_date: "2024-01-05T09:07:16.000Z",
      subtotal: 4329000,
      discount: 0,
      sale_tax: 432900,
      total: 4761900
    },
    {
      order_id: 621,
      customer_id: 19,
      order_date: "2024-05-05T01:17:37.000Z",
      subtotal: 2822000,
      discount: 0,
      sale_tax: 282200,
      total: 3104200
    },
    {
      order_id: 865,
      customer_id: 40,
      order_date: "2024-04-15T07:37:32.000Z",
      subtotal: 889000,
      discount: 0,
      sale_tax: 88900,
      total: 977900
    },
    {
      order_id: 962,
      customer_id: 42,
      order_date: "2024-01-23T17:20:50.000Z",
      subtotal: 1439000,
      discount: 0,
      sale_tax: 143900,
      total: 1582900
    },
    {
      order_id: 106,
      customer_id: 14,
      order_date: "2024-05-30T08:42:33.000Z",
      subtotal: 670000,
      discount: 0,
      sale_tax: 67000,
      total: 737000
    },
    {
      order_id: 178,
      customer_id: 42,
      order_date: "2024-08-12T14:39:31.000Z",
      subtotal: 4251000,
      discount: 0,
      sale_tax: 425100,
      total: 4676100
    },
    {
      order_id: 795,
      customer_id: 9,
      order_date: "2024-07-07T02:10:14.000Z",
      subtotal: 1778000,
      discount: 0,
      sale_tax: 177800,
      total: 1955800
    },
    {
      order_id: 809,
      customer_id: 35,
      order_date: "2024-04-16T18:26:14.000Z",
      subtotal: 367000,
      discount: 0,
      sale_tax: 36700,
      total: 403700
    },
    {
      order_id: 585,
      customer_id: 44,
      order_date: "2024-01-24T03:14:36.000Z",
      subtotal: 2468000,
      discount: 0,
      sale_tax: 246800,
      total: 2714800
    },
    {
      order_id: 8,
      customer_id: 40,
      order_date: "2024-12-22T02:44:11.000Z",
      subtotal: 218000,
      discount: 0,
      sale_tax: 21800,
      total: 239800
    },
    {
      order_id: 934,
      customer_id: 41,
      order_date: "2024-07-16T06:02:51.000Z",
      subtotal: 1745000,
      discount: 0,
      sale_tax: 174500,
      total: 1919500
    },
    {
      order_id: 908,
      customer_id: 35,
      order_date: "2024-12-10T11:51:58.000Z",
      subtotal: 2561000,
      discount: 0,
      sale_tax: 256100,
      total: 2817100
    },
    {
      order_id: 708,
      customer_id: 20,
      order_date: "2024-05-06T19:24:29.000Z",
      subtotal: 1252000,
      discount: 0,
      sale_tax: 125200,
      total: 1377200
    },
    {
      order_id: 455,
      customer_id: 35,
      order_date: "2024-03-16T11:19:48.000Z",
      subtotal: 2641000,
      discount: 0,
      sale_tax: 264100,
      total: 2905100
    },
    {
      order_id: 370,
      customer_id: 38,
      order_date: "2024-10-26T00:07:02.000Z",
      subtotal: 907000,
      discount: 0,
      sale_tax: 90700,
      total: 997700
    },
    {
      order_id: 684,
      customer_id: 49,
      order_date: "2024-09-12T08:00:14.000Z",
      subtotal: 2102000,
      discount: 0,
      sale_tax: 210200,
      total: 2312200
    },
    {
      order_id: 713,
      customer_id: 40,
      order_date: "2024-01-24T23:45:46.000Z",
      subtotal: 2120000,
      discount: 0,
      sale_tax: 212000,
      total: 2332000
    },
    {
      order_id: 448,
      customer_id: 10,
      order_date: "2024-07-11T09:06:35.000Z",
      subtotal: 1418000,
      discount: 0,
      sale_tax: 141800,
      total: 1559800
    },
    {
      order_id: 930,
      customer_id: 36,
      order_date: "2024-12-06T14:28:05.000Z",
      subtotal: 820000,
      discount: 0,
      sale_tax: 82000,
      total: 902000
    },
    {
      order_id: 396,
      customer_id: 37,
      order_date: "2024-10-20T00:44:38.000Z",
      subtotal: 514000,
      discount: 0,
      sale_tax: 51400,
      total: 565400
    },
    {
      order_id: 701,
      customer_id: 47,
      order_date: "2024-04-02T23:51:47.000Z",
      subtotal: 1846000,
      discount: 0,
      sale_tax: 184600,
      total: 2030600
    },
    {
      order_id: 132,
      customer_id: 46,
      order_date: "2024-09-08T22:38:31.000Z",
      subtotal: 1642000,
      discount: 0,
      sale_tax: 164200,
      total: 1806200
    },
    {
      order_id: 514,
      customer_id: 2,
      order_date: "2024-07-30T15:09:58.000Z",
      subtotal: 1137000,
      discount: 0,
      sale_tax: 113700,
      total: 1250700
    },
    {
      order_id: 322,
      customer_id: 22,
      order_date: "2024-01-07T11:36:47.000Z",
      subtotal: 2208000,
      discount: 0,
      sale_tax: 220800,
      total: 2428800
    },
    {
      order_id: 854,
      customer_id: 33,
      order_date: "2024-04-29T07:18:09.000Z",
      subtotal: 1183000,
      discount: 0,
      sale_tax: 118300,
      total: 1301300
    },
    {
      order_id: 389,
      customer_id: 44,
      order_date: "2024-05-19T02:33:42.000Z",
      subtotal: 661000,
      discount: 0,
      sale_tax: 66100,
      total: 727100
    },
    {
      order_id: 916,
      customer_id: 24,
      order_date: "2024-12-12T23:18:47.000Z",
      subtotal: 2037000,
      discount: 0,
      sale_tax: 203700,
      total: 2240700
    },
    {
      order_id: 863,
      customer_id: 23,
      order_date: "2024-02-17T09:00:44.000Z",
      subtotal: 1014000,
      discount: 0,
      sale_tax: 101400,
      total: 1115400
    },
    {
      order_id: 114,
      customer_id: 15,
      order_date: "2024-03-21T03:51:48.000Z",
      subtotal: 3172000,
      discount: 0,
      sale_tax: 317200,
      total: 3489200
    },
    {
      order_id: 60,
      customer_id: 17,
      order_date: "2024-06-24T13:42:32.000Z",
      subtotal: 3112000,
      discount: 0,
      sale_tax: 311200,
      total: 3423200
    },
    {
      order_id: 754,
      customer_id: 34,
      order_date: "2024-10-04T10:12:25.000Z",
      subtotal: 1496000,
      discount: 0,
      sale_tax: 149600,
      total: 1645600
    },
    {
      order_id: 518,
      customer_id: 40,
      order_date: "2024-10-22T14:50:52.000Z",
      subtotal: 2631000,
      discount: 0,
      sale_tax: 263100,
      total: 2894100
    },
    {
      order_id: 289,
      customer_id: 42,
      order_date: "2024-01-31T02:23:31.000Z",
      subtotal: 4901000,
      discount: 0,
      sale_tax: 490100,
      total: 5391100
    },
    {
      order_id: 583,
      customer_id: 5,
      order_date: "2024-02-17T20:56:14.000Z",
      subtotal: 2703000,
      discount: 0,
      sale_tax: 270300,
      total: 2973300
    },
    {
      order_id: 65,
      customer_id: 15,
      order_date: "2024-09-03T19:19:21.000Z",
      subtotal: 3513000,
      discount: 0,
      sale_tax: 351300,
      total: 3864300
    },
    {
      order_id: 693,
      customer_id: 28,
      order_date: "2024-11-21T01:28:23.000Z",
      subtotal: 734000,
      discount: 0,
      sale_tax: 73400,
      total: 807400
    },
    {
      order_id: 98,
      customer_id: 28,
      order_date: "2024-12-13T07:35:20.000Z",
      subtotal: 2160000,
      discount: 0,
      sale_tax: 216000,
      total: 2376000
    },
    {
      order_id: 744,
      customer_id: 14,
      order_date: "2024-01-05T23:09:13.000Z",
      subtotal: 2469000,
      discount: 0,
      sale_tax: 246900,
      total: 2715900
    },
    {
      order_id: 715,
      customer_id: 30,
      order_date: "2024-10-31T10:18:43.000Z",
      subtotal: 882000,
      discount: 0,
      sale_tax: 88200,
      total: 970200
    },
    {
      order_id: 527,
      customer_id: 21,
      order_date: "2024-03-07T10:27:50.000Z",
      subtotal: 3399000,
      discount: 0,
      sale_tax: 339900,
      total: 3738900
    },
    {
      order_id: 490,
      customer_id: 30,
      order_date: "2024-06-07T04:49:27.000Z",
      subtotal: 1169000,
      discount: 0,
      sale_tax: 116900,
      total: 1285900
    },
    {
      order_id: 235,
      customer_id: 22,
      order_date: "2024-07-31T09:35:15.000Z",
      subtotal: 1724000,
      discount: 0,
      sale_tax: 172400,
      total: 1896400
    },
    {
      order_id: 763,
      customer_id: 17,
      order_date: "2024-08-24T08:05:53.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 627,
      customer_id: 22,
      order_date: "2024-08-05T03:41:36.000Z",
      subtotal: 2339000,
      discount: 0,
      sale_tax: 233900,
      total: 2572900
    },
    {
      order_id: 119,
      customer_id: 8,
      order_date: "2024-05-24T15:37:35.000Z",
      subtotal: 290000,
      discount: 0,
      sale_tax: 29000,
      total: 319000
    },
    {
      order_id: 306,
      customer_id: 38,
      order_date: "2024-11-30T00:40:30.000Z",
      subtotal: 72000,
      discount: 0,
      sale_tax: 7200,
      total: 79200
    },
    {
      order_id: 286,
      customer_id: 2,
      order_date: "2024-02-13T20:01:05.000Z",
      subtotal: 853000,
      discount: 0,
      sale_tax: 85300,
      total: 938300
    },
    {
      order_id: 376,
      customer_id: 21,
      order_date: "2024-10-17T21:07:06.000Z",
      subtotal: 711000,
      discount: 0,
      sale_tax: 71100,
      total: 782100
    },
    {
      order_id: 147,
      customer_id: 15,
      order_date: "2024-03-19T14:10:55.000Z",
      subtotal: 3015000,
      discount: 0,
      sale_tax: 301500,
      total: 3316500
    },
    {
      order_id: 860,
      customer_id: 40,
      order_date: "2024-04-18T20:00:37.000Z",
      subtotal: 962000,
      discount: 0,
      sale_tax: 96200,
      total: 1058200
    },
    {
      order_id: 480,
      customer_id: 27,
      order_date: "2024-01-03T02:10:02.000Z",
      subtotal: 1694000,
      discount: 0,
      sale_tax: 169400,
      total: 1863400
    },
    {
      order_id: 338,
      customer_id: 29,
      order_date: "2024-02-18T04:38:48.000Z",
      subtotal: 3468000,
      discount: 0,
      sale_tax: 346800,
      total: 3814800
    },
    {
      order_id: 358,
      customer_id: 40,
      order_date: "2024-10-13T15:05:25.000Z",
      subtotal: 2576000,
      discount: 0,
      sale_tax: 257600,
      total: 2833600
    },
    {
      order_id: 412,
      customer_id: 5,
      order_date: "2024-08-23T06:58:09.000Z",
      subtotal: 1647000,
      discount: 0,
      sale_tax: 164700,
      total: 1811700
    },
    {
      order_id: 989,
      customer_id: 40,
      order_date: "2024-01-03T13:50:10.000Z",
      subtotal: 398000,
      discount: 0,
      sale_tax: 39800,
      total: 437800
    },
    {
      order_id: 26,
      customer_id: 14,
      order_date: "2024-02-25T08:25:35.000Z",
      subtotal: 167000,
      discount: 0,
      sale_tax: 16700,
      total: 183700
    },
    {
      order_id: 950,
      customer_id: 30,
      order_date: "2024-02-23T01:33:26.000Z",
      subtotal: 525000,
      discount: 0,
      sale_tax: 52500,
      total: 577500
    },
    {
      order_id: 564,
      customer_id: 27,
      order_date: "2024-01-02T05:48:18.000Z",
      subtotal: 3779000,
      discount: 0,
      sale_tax: 377900,
      total: 4156900
    },
    {
      order_id: 535,
      customer_id: 47,
      order_date: "2024-06-07T19:38:09.000Z",
      subtotal: 1473000,
      discount: 0,
      sale_tax: 147300,
      total: 1620300
    },
    {
      order_id: 72,
      customer_id: 45,
      order_date: "2024-09-01T09:10:34.000Z",
      subtotal: 1621000,
      discount: 0,
      sale_tax: 162100,
      total: 1783100
    },
    {
      order_id: 642,
      customer_id: 35,
      order_date: "2024-02-16T14:47:31.000Z",
      subtotal: 157000,
      discount: 0,
      sale_tax: 15700,
      total: 172700
    },
    {
      order_id: 232,
      customer_id: 34,
      order_date: "2024-02-15T00:16:15.000Z",
      subtotal: 1343000,
      discount: 0,
      sale_tax: 134300,
      total: 1477300
    },
    {
      order_id: 77,
      customer_id: 7,
      order_date: "2024-05-14T18:46:05.000Z",
      subtotal: 4049000,
      discount: 0,
      sale_tax: 404900,
      total: 4453900
    },
    {
      order_id: 725,
      customer_id: 2,
      order_date: "2024-08-03T19:13:36.000Z",
      subtotal: 1680000,
      discount: 0,
      sale_tax: 168000,
      total: 1848000
    },
    {
      order_id: 131,
      customer_id: 4,
      order_date: "2024-03-07T08:18:37.000Z",
      subtotal: 3211000,
      discount: 0,
      sale_tax: 321100,
      total: 3532100
    },
    {
      order_id: 310,
      customer_id: 2,
      order_date: "2024-03-01T11:38:07.000Z",
      subtotal: 1611000,
      discount: 0,
      sale_tax: 161100,
      total: 1772100
    },
    {
      order_id: 37,
      customer_id: 39,
      order_date: "2024-06-05T15:17:43.000Z",
      subtotal: 1050000,
      discount: 0,
      sale_tax: 105000,
      total: 1155000
    },
    {
      order_id: 832,
      customer_id: 47,
      order_date: "2024-09-21T01:24:03.000Z",
      subtotal: 1008000,
      discount: 0,
      sale_tax: 100800,
      total: 1108800
    },
    {
      order_id: 907,
      customer_id: 9,
      order_date: "2024-09-09T11:50:35.000Z",
      subtotal: 499000,
      discount: 0,
      sale_tax: 49900,
      total: 548900
    },
    {
      order_id: 584,
      customer_id: 48,
      order_date: "2024-02-05T05:42:49.000Z",
      subtotal: 478000,
      discount: 0,
      sale_tax: 47800,
      total: 525800
    },
    {
      order_id: 746,
      customer_id: 41,
      order_date: "2024-05-20T06:33:34.000Z",
      subtotal: 1116000,
      discount: 0,
      sale_tax: 111600,
      total: 1227600
    },
    {
      order_id: 806,
      customer_id: 21,
      order_date: "2024-07-17T18:06:54.000Z",
      subtotal: 2529000,
      discount: 0,
      sale_tax: 252900,
      total: 2781900
    },
    {
      order_id: 353,
      customer_id: 45,
      order_date: "2024-04-14T02:52:09.000Z",
      subtotal: 239000,
      discount: 0,
      sale_tax: 23900,
      total: 262900
    },
    {
      order_id: 939,
      customer_id: 33,
      order_date: "2024-05-30T22:58:55.000Z",
      subtotal: 2553000,
      discount: 0,
      sale_tax: 255300,
      total: 2808300
    },
    {
      order_id: 834,
      customer_id: 7,
      order_date: "2024-03-14T22:50:29.000Z",
      subtotal: 1074000,
      discount: 0,
      sale_tax: 107400,
      total: 1181400
    },
    {
      order_id: 831,
      customer_id: 22,
      order_date: "2024-05-22T09:26:42.000Z",
      subtotal: 2661000,
      discount: 0,
      sale_tax: 266100,
      total: 2927100
    },
    {
      order_id: 813,
      customer_id: 34,
      order_date: "2024-02-12T18:17:48.000Z",
      subtotal: 590000,
      discount: 0,
      sale_tax: 59000,
      total: 649000
    },
    {
      order_id: 574,
      customer_id: 33,
      order_date: "2024-07-03T02:03:48.000Z",
      subtotal: 2433000,
      discount: 0,
      sale_tax: 243300,
      total: 2676300
    },
    {
      order_id: 225,
      customer_id: 45,
      order_date: "2024-01-26T13:17:16.000Z",
      subtotal: 1753000,
      discount: 0,
      sale_tax: 175300,
      total: 1928300
    },
    {
      order_id: 333,
      customer_id: 5,
      order_date: "2024-11-19T06:30:54.000Z",
      subtotal: 198000,
      discount: 0,
      sale_tax: 19800,
      total: 217800
    },
    {
      order_id: 174,
      customer_id: 41,
      order_date: "2024-11-08T07:51:44.000Z",
      subtotal: 441000,
      discount: 0,
      sale_tax: 44100,
      total: 485100
    },
    {
      order_id: 45,
      customer_id: 39,
      order_date: "2024-12-18T22:05:18.000Z",
      subtotal: 427000,
      discount: 0,
      sale_tax: 42700,
      total: 469700
    },
    {
      order_id: 891,
      customer_id: 37,
      order_date: "2024-12-29T01:45:21.000Z",
      subtotal: 638000,
      discount: 0,
      sale_tax: 63800,
      total: 701800
    },
    {
      order_id: 134,
      customer_id: 20,
      order_date: "2024-02-18T01:47:46.000Z",
      subtotal: 4125000,
      discount: 0,
      sale_tax: 412500,
      total: 4537500
    },
    {
      order_id: 918,
      customer_id: 21,
      order_date: "2024-12-08T04:46:22.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 975,
      customer_id: 43,
      order_date: "2024-03-02T22:05:57.000Z",
      subtotal: 217000,
      discount: 0,
      sale_tax: 21700,
      total: 238700
    },
    {
      order_id: 36,
      customer_id: 5,
      order_date: "2024-06-13T10:25:19.000Z",
      subtotal: 823000,
      discount: 0,
      sale_tax: 82300,
      total: 905300
    },
    {
      order_id: 848,
      customer_id: 22,
      order_date: "2024-03-09T12:52:09.000Z",
      subtotal: 842000,
      discount: 0,
      sale_tax: 84200,
      total: 926200
    },
    {
      order_id: 430,
      customer_id: 27,
      order_date: "2024-07-10T13:51:05.000Z",
      subtotal: 864000,
      discount: 0,
      sale_tax: 86400,
      total: 950400
    },
    {
      order_id: 102,
      customer_id: 25,
      order_date: "2024-02-18T19:24:53.000Z",
      subtotal: 1111000,
      discount: 0,
      sale_tax: 111100,
      total: 1222100
    },
    {
      order_id: 158,
      customer_id: 17,
      order_date: "2024-08-10T15:15:30.000Z",
      subtotal: 1325000,
      discount: 0,
      sale_tax: 132500,
      total: 1457500
    },
    {
      order_id: 533,
      customer_id: 23,
      order_date: "2024-07-03T22:42:45.000Z",
      subtotal: 298000,
      discount: 0,
      sale_tax: 29800,
      total: 327800
    },
    {
      order_id: 915,
      customer_id: 18,
      order_date: "2024-06-29T11:20:11.000Z",
      subtotal: 1745000,
      discount: 0,
      sale_tax: 174500,
      total: 1919500
    },
    {
      order_id: 459,
      customer_id: 35,
      order_date: "2024-04-15T06:08:13.000Z",
      subtotal: 1047000,
      discount: 0,
      sale_tax: 104700,
      total: 1151700
    },
    {
      order_id: 207,
      customer_id: 2,
      order_date: "2024-12-01T12:34:12.000Z",
      subtotal: 276000,
      discount: 0,
      sale_tax: 27600,
      total: 303600
    },
    {
      order_id: 979,
      customer_id: 44,
      order_date: "2024-01-13T12:16:24.000Z",
      subtotal: 1522000,
      discount: 0,
      sale_tax: 152200,
      total: 1674200
    },
    {
      order_id: 123,
      customer_id: 30,
      order_date: "2024-03-25T21:38:17.000Z",
      subtotal: 952000,
      discount: 0,
      sale_tax: 95200,
      total: 1047200
    },
    {
      order_id: 871,
      customer_id: 47,
      order_date: "2024-12-05T21:51:49.000Z",
      subtotal: 1777000,
      discount: 0,
      sale_tax: 177700,
      total: 1954700
    },
    {
      order_id: 881,
      customer_id: 2,
      order_date: "2024-05-19T07:48:33.000Z",
      subtotal: 2648000,
      discount: 0,
      sale_tax: 264800,
      total: 2912800
    },
    {
      order_id: 385,
      customer_id: 7,
      order_date: "2024-03-13T13:28:56.000Z",
      subtotal: 874000,
      discount: 0,
      sale_tax: 87400,
      total: 961400
    },
    {
      order_id: 492,
      customer_id: 38,
      order_date: "2024-06-09T22:37:49.000Z",
      subtotal: 3191000,
      discount: 0,
      sale_tax: 319100,
      total: 3510100
    },
    {
      order_id: 544,
      customer_id: 43,
      order_date: "2024-07-02T02:09:08.000Z",
      subtotal: 3082000,
      discount: 0,
      sale_tax: 308200,
      total: 3390200
    },
    {
      order_id: 365,
      customer_id: 16,
      order_date: "2024-03-04T20:19:51.000Z",
      subtotal: 2535000,
      discount: 0,
      sale_tax: 253500,
      total: 2788500
    },
    {
      order_id: 704,
      customer_id: 47,
      order_date: "2024-12-02T20:47:12.000Z",
      subtotal: 358000,
      discount: 0,
      sale_tax: 35800,
      total: 393800
    },
    {
      order_id: 157,
      customer_id: 12,
      order_date: "2024-05-19T13:50:04.000Z",
      subtotal: 2145000,
      discount: 0,
      sale_tax: 214500,
      total: 2359500
    },
    {
      order_id: 606,
      customer_id: 40,
      order_date: "2024-11-07T12:02:56.000Z",
      subtotal: 452000,
      discount: 0,
      sale_tax: 45200,
      total: 497200
    },
    {
      order_id: 618,
      customer_id: 31,
      order_date: "2024-07-23T02:17:50.000Z",
      subtotal: 2091000,
      discount: 0,
      sale_tax: 209100,
      total: 2300100
    },
    {
      order_id: 308,
      customer_id: 19,
      order_date: "2024-06-19T14:49:28.000Z",
      subtotal: 2370000,
      discount: 0,
      sale_tax: 237000,
      total: 2607000
    },
    {
      order_id: 880,
      customer_id: 36,
      order_date: "2024-11-24T06:33:10.000Z",
      subtotal: 2563000,
      discount: 0,
      sale_tax: 256300,
      total: 2819300
    },
    {
      order_id: 313,
      customer_id: 47,
      order_date: "2024-01-10T21:48:24.000Z",
      subtotal: 1304000,
      discount: 0,
      sale_tax: 130400,
      total: 1434400
    },
    {
      order_id: 140,
      customer_id: 26,
      order_date: "2024-09-27T13:26:45.000Z",
      subtotal: 1935000,
      discount: 0,
      sale_tax: 193500,
      total: 2128500
    },
    {
      order_id: 248,
      customer_id: 45,
      order_date: "2024-03-07T10:38:43.000Z",
      subtotal: 99000,
      discount: 0,
      sale_tax: 9900,
      total: 108900
    },
    {
      order_id: 137,
      customer_id: 7,
      order_date: "2024-02-20T14:40:48.000Z",
      subtotal: 526000,
      discount: 0,
      sale_tax: 52600,
      total: 578600
    },
    {
      order_id: 208,
      customer_id: 26,
      order_date: "2024-03-02T11:06:25.000Z",
      subtotal: 1197000,
      discount: 0,
      sale_tax: 119700,
      total: 1316700
    },
    {
      order_id: 614,
      customer_id: 31,
      order_date: "2024-06-18T03:22:03.000Z",
      subtotal: 659000,
      discount: 0,
      sale_tax: 65900,
      total: 724900
    },
    {
      order_id: 392,
      customer_id: 7,
      order_date: "2024-06-27T23:07:05.000Z",
      subtotal: 1458000,
      discount: 0,
      sale_tax: 145800,
      total: 1603800
    },
    {
      order_id: 24,
      customer_id: 49,
      order_date: "2024-03-30T12:21:47.000Z",
      subtotal: 918000,
      discount: 0,
      sale_tax: 91800,
      total: 1009800
    },
    {
      order_id: 191,
      customer_id: 22,
      order_date: "2024-09-18T02:45:35.000Z",
      subtotal: 229000,
      discount: 0,
      sale_tax: 22900,
      total: 251900
    },
    {
      order_id: 966,
      customer_id: 7,
      order_date: "2024-07-20T17:28:05.000Z",
      subtotal: 1691000,
      discount: 0,
      sale_tax: 169100,
      total: 1860100
    },
    {
      order_id: 760,
      customer_id: 49,
      order_date: "2024-01-29T22:05:23.000Z",
      subtotal: 698000,
      discount: 0,
      sale_tax: 69800,
      total: 767800
    },
    {
      order_id: 94,
      customer_id: 28,
      order_date: "2024-06-13T23:14:41.000Z",
      subtotal: 2326000,
      discount: 0,
      sale_tax: 232600,
      total: 2558600
    },
    {
      order_id: 218,
      customer_id: 39,
      order_date: "2024-06-28T13:15:36.000Z",
      subtotal: 4280000,
      discount: 0,
      sale_tax: 428000,
      total: 4708000
    },
    {
      order_id: 49,
      customer_id: 43,
      order_date: "2024-03-19T09:36:43.000Z",
      subtotal: 925000,
      discount: 0,
      sale_tax: 92500,
      total: 1017500
    },
    {
      order_id: 671,
      customer_id: 5,
      order_date: "2024-06-22T01:38:35.000Z",
      subtotal: 687000,
      discount: 0,
      sale_tax: 68700,
      total: 755700
    },
    {
      order_id: 580,
      customer_id: 38,
      order_date: "2024-12-10T15:15:35.000Z",
      subtotal: 1837000,
      discount: 0,
      sale_tax: 183700,
      total: 2020700
    },
    {
      order_id: 742,
      customer_id: 17,
      order_date: "2024-04-20T21:50:31.000Z",
      subtotal: 6349000,
      discount: 0,
      sale_tax: 634900,
      total: 6983900
    },
    {
      order_id: 912,
      customer_id: 12,
      order_date: "2024-08-15T20:49:56.000Z",
      subtotal: 2179000,
      discount: 0,
      sale_tax: 217900,
      total: 2396900
    },
    {
      order_id: 846,
      customer_id: 34,
      order_date: "2024-01-10T15:44:28.000Z",
      subtotal: 1009000,
      discount: 0,
      sale_tax: 100900,
      total: 1109900
    },
    {
      order_id: 938,
      customer_id: 5,
      order_date: "2024-12-08T04:09:16.000Z",
      subtotal: 1522000,
      discount: 0,
      sale_tax: 152200,
      total: 1674200
    },
    {
      order_id: 184,
      customer_id: 28,
      order_date: "2024-01-17T22:13:34.000Z",
      subtotal: 2075000,
      discount: 0,
      sale_tax: 207500,
      total: 2282500
    },
    {
      order_id: 87,
      customer_id: 35,
      order_date: "2024-05-23T17:57:50.000Z",
      subtotal: 1386000,
      discount: 0,
      sale_tax: 138600,
      total: 1524600
    },
    {
      order_id: 753,
      customer_id: 47,
      order_date: "2024-09-13T07:16:11.000Z",
      subtotal: 1204000,
      discount: 0,
      sale_tax: 120400,
      total: 1324400
    },
    {
      order_id: 477,
      customer_id: 12,
      order_date: "2024-11-10T23:25:34.000Z",
      subtotal: 2026000,
      discount: 0,
      sale_tax: 202600,
      total: 2228600
    },
    {
      order_id: 550,
      customer_id: 12,
      order_date: "2024-09-24T14:17:40.000Z",
      subtotal: 541000,
      discount: 0,
      sale_tax: 54100,
      total: 595100
    },
    {
      order_id: 394,
      customer_id: 28,
      order_date: "2024-01-29T12:25:23.000Z",
      subtotal: 408000,
      discount: 0,
      sale_tax: 40800,
      total: 448800
    },
    {
      order_id: 272,
      customer_id: 21,
      order_date: "2024-10-23T23:17:03.000Z",
      subtotal: 1008000,
      discount: 0,
      sale_tax: 100800,
      total: 1108800
    },
    {
      order_id: 781,
      customer_id: 31,
      order_date: "2024-09-20T23:57:14.000Z",
      subtotal: 1088000,
      discount: 0,
      sale_tax: 108800,
      total: 1196800
    },
    {
      order_id: 867,
      customer_id: 12,
      order_date: "2024-06-03T08:04:56.000Z",
      subtotal: 1754000,
      discount: 0,
      sale_tax: 175400,
      total: 1929400
    },
    {
      order_id: 190,
      customer_id: 30,
      order_date: "2024-12-05T17:54:37.000Z",
      subtotal: 1319000,
      discount: 0,
      sale_tax: 131900,
      total: 1450900
    },
    {
      order_id: 858,
      customer_id: 18,
      order_date: "2024-11-10T17:57:40.000Z",
      subtotal: 2404000,
      discount: 0,
      sale_tax: 240400,
      total: 2644400
    },
    {
      order_id: 554,
      customer_id: 18,
      order_date: "2024-05-06T02:19:22.000Z",
      subtotal: 4598000,
      discount: 0,
      sale_tax: 459800,
      total: 5057800
    },
    {
      order_id: 424,
      customer_id: 44,
      order_date: "2024-06-29T04:43:39.000Z",
      subtotal: 4015000,
      discount: 0,
      sale_tax: 401500,
      total: 4416500
    },
    {
      order_id: 406,
      customer_id: 37,
      order_date: "2024-02-14T20:07:15.000Z",
      subtotal: 1327000,
      discount: 0,
      sale_tax: 132700,
      total: 1459700
    },
    {
      order_id: 670,
      customer_id: 42,
      order_date: "2024-05-23T00:32:48.000Z",
      subtotal: 1828000,
      discount: 0,
      sale_tax: 182800,
      total: 2010800
    },
    {
      order_id: 309,
      customer_id: 43,
      order_date: "2024-02-18T00:27:47.000Z",
      subtotal: 1093000,
      discount: 0,
      sale_tax: 109300,
      total: 1202300
    },
    {
      order_id: 849,
      customer_id: 42,
      order_date: "2024-09-17T19:29:18.000Z",
      subtotal: 2187000,
      discount: 0,
      sale_tax: 218700,
      total: 2405700
    },
    {
      order_id: 509,
      customer_id: 1,
      order_date: "2024-10-15T00:15:43.000Z",
      subtotal: 873000,
      discount: 0,
      sale_tax: 87300,
      total: 960300
    },
    {
      order_id: 919,
      customer_id: 4,
      order_date: "2024-10-12T15:54:52.000Z",
      subtotal: 2044000,
      discount: 0,
      sale_tax: 204400,
      total: 2248400
    },
    {
      order_id: 156,
      customer_id: 21,
      order_date: "2024-07-30T05:45:25.000Z",
      subtotal: 1183000,
      discount: 0,
      sale_tax: 118300,
      total: 1301300
    },
    {
      order_id: 932,
      customer_id: 37,
      order_date: "2024-11-26T17:13:04.000Z",
      subtotal: 716000,
      discount: 0,
      sale_tax: 71600,
      total: 787600
    },
    {
      order_id: 641,
      customer_id: 44,
      order_date: "2024-01-15T06:21:09.000Z",
      subtotal: 1124000,
      discount: 0,
      sale_tax: 112400,
      total: 1236400
    },
    {
      order_id: 475,
      customer_id: 14,
      order_date: "2024-09-28T23:55:55.000Z",
      subtotal: 158000,
      discount: 0,
      sale_tax: 15800,
      total: 173800
    },
    {
      order_id: 961,
      customer_id: 18,
      order_date: "2024-05-04T09:27:40.000Z",
      subtotal: 537000,
      discount: 0,
      sale_tax: 53700,
      total: 590700
    },
    {
      order_id: 888,
      customer_id: 36,
      order_date: "2024-02-27T08:03:04.000Z",
      subtotal: 980000,
      discount: 0,
      sale_tax: 98000,
      total: 1078000
    },
    {
      order_id: 282,
      customer_id: 5,
      order_date: "2024-05-30T03:39:41.000Z",
      subtotal: 3009000,
      discount: 0,
      sale_tax: 300900,
      total: 3309900
    },
    {
      order_id: 733,
      customer_id: 23,
      order_date: "2024-10-18T11:08:13.000Z",
      subtotal: 1179000,
      discount: 0,
      sale_tax: 117900,
      total: 1296900
    },
    {
      order_id: 269,
      customer_id: 49,
      order_date: "2024-06-23T03:32:25.000Z",
      subtotal: 2415000,
      discount: 0,
      sale_tax: 241500,
      total: 2656500
    },
    {
      order_id: 261,
      customer_id: 15,
      order_date: "2024-10-27T15:39:18.000Z",
      subtotal: 889000,
      discount: 0,
      sale_tax: 88900,
      total: 977900
    },
    {
      order_id: 502,
      customer_id: 18,
      order_date: "2024-09-18T02:54:42.000Z",
      subtotal: 694000,
      discount: 0,
      sale_tax: 69400,
      total: 763400
    },
    {
      order_id: 117,
      customer_id: 33,
      order_date: "2024-03-06T05:08:07.000Z",
      subtotal: 2783000,
      discount: 0,
      sale_tax: 278300,
      total: 3061300
    },
    {
      order_id: 257,
      customer_id: 1,
      order_date: "2024-10-18T20:34:23.000Z",
      subtotal: 1692000,
      discount: 0,
      sale_tax: 169200,
      total: 1861200
    },
    {
      order_id: 125,
      customer_id: 12,
      order_date: "2024-02-29T03:06:39.000Z",
      subtotal: 765000,
      discount: 0,
      sale_tax: 76500,
      total: 841500
    },
    {
      order_id: 40,
      customer_id: 12,
      order_date: "2024-03-24T09:01:13.000Z",
      subtotal: 1041000,
      discount: 0,
      sale_tax: 104100,
      total: 1145100
    },
    {
      order_id: 700,
      customer_id: 8,
      order_date: "2024-07-15T06:25:21.000Z",
      subtotal: 1444000,
      discount: 0,
      sale_tax: 144400,
      total: 1588400
    },
    {
      order_id: 43,
      customer_id: 46,
      order_date: "2024-02-20T18:17:32.000Z",
      subtotal: 2094000,
      discount: 0,
      sale_tax: 209400,
      total: 2303400
    },
    {
      order_id: 587,
      customer_id: 38,
      order_date: "2024-04-26T06:57:48.000Z",
      subtotal: 1548000,
      discount: 0,
      sale_tax: 154800,
      total: 1702800
    },
    {
      order_id: 349,
      customer_id: 35,
      order_date: "2024-10-28T11:05:48.000Z",
      subtotal: 2699000,
      discount: 0,
      sale_tax: 269900,
      total: 2968900
    },
    {
      order_id: 187,
      customer_id: 7,
      order_date: "2024-04-04T09:58:18.000Z",
      subtotal: 2161000,
      discount: 0,
      sale_tax: 216100,
      total: 2377100
    },
    {
      order_id: 914,
      customer_id: 46,
      order_date: "2024-07-26T12:13:11.000Z",
      subtotal: 3899000,
      discount: 0,
      sale_tax: 389900,
      total: 4288900
    },
    {
      order_id: 766,
      customer_id: 39,
      order_date: "2024-07-22T10:46:31.000Z",
      subtotal: 149000,
      discount: 0,
      sale_tax: 14900,
      total: 163900
    },
    {
      order_id: 728,
      customer_id: 40,
      order_date: "2024-03-30T17:34:25.000Z",
      subtotal: 398000,
      discount: 0,
      sale_tax: 39800,
      total: 437800
    },
    {
      order_id: 506,
      customer_id: 31,
      order_date: "2024-07-26T14:45:54.000Z",
      subtotal: 1378000,
      discount: 0,
      sale_tax: 137800,
      total: 1515800
    },
    {
      order_id: 242,
      customer_id: 8,
      order_date: "2024-07-18T12:10:41.000Z",
      subtotal: 2023000,
      discount: 0,
      sale_tax: 202300,
      total: 2225300
    },
    {
      order_id: 331,
      customer_id: 25,
      order_date: "2024-04-17T07:48:31.000Z",
      subtotal: 2097000,
      discount: 0,
      sale_tax: 209700,
      total: 2306700
    },
    {
      order_id: 913,
      customer_id: 5,
      order_date: "2024-10-09T04:39:36.000Z",
      subtotal: 2085000,
      discount: 0,
      sale_tax: 208500,
      total: 2293500
    },
    {
      order_id: 599,
      customer_id: 41,
      order_date: "2024-10-20T20:09:12.000Z",
      subtotal: 1196000,
      discount: 0,
      sale_tax: 119600,
      total: 1315600
    },
    {
      order_id: 677,
      customer_id: 18,
      order_date: "2024-10-08T19:40:57.000Z",
      subtotal: 2377000,
      discount: 0,
      sale_tax: 237700,
      total: 2614700
    },
    {
      order_id: 29,
      customer_id: 9,
      order_date: "2024-07-29T23:27:53.000Z",
      subtotal: 3451000,
      discount: 0,
      sale_tax: 345100,
      total: 3796100
    },
    {
      order_id: 4,
      customer_id: 30,
      order_date: "2024-01-31T06:45:41.000Z",
      subtotal: 1406000,
      discount: 0,
      sale_tax: 140600,
      total: 1546600
    },
    {
      order_id: 698,
      customer_id: 10,
      order_date: "2024-11-22T23:50:16.000Z",
      subtotal: 1755000,
      discount: 0,
      sale_tax: 175500,
      total: 1930500
    },
    {
      order_id: 96,
      customer_id: 23,
      order_date: "2024-05-06T19:04:56.000Z",
      subtotal: 2676000,
      discount: 0,
      sale_tax: 267600,
      total: 2943600
    },
    {
      order_id: 466,
      customer_id: 20,
      order_date: "2024-08-10T08:05:16.000Z",
      subtotal: 79000,
      discount: 0,
      sale_tax: 7900,
      total: 86900
    },
    {
      order_id: 201,
      customer_id: 6,
      order_date: "2024-06-15T04:06:23.000Z",
      subtotal: 925000,
      discount: 0,
      sale_tax: 92500,
      total: 1017500
    },
    {
      order_id: 844,
      customer_id: 4,
      order_date: "2024-01-18T02:40:17.000Z",
      subtotal: 2105000,
      discount: 0,
      sale_tax: 210500,
      total: 2315500
    },
    {
      order_id: 980,
      customer_id: 39,
      order_date: "2024-08-16T22:09:29.000Z",
      subtotal: 2117000,
      discount: 0,
      sale_tax: 211700,
      total: 2328700
    },
    {
      order_id: 631,
      customer_id: 25,
      order_date: "2024-05-16T08:24:41.000Z",
      subtotal: 4695000,
      discount: 0,
      sale_tax: 469500,
      total: 5164500
    },
    {
      order_id: 107,
      customer_id: 6,
      order_date: "2024-11-13T14:43:56.000Z",
      subtotal: 1354000,
      discount: 0,
      sale_tax: 135400,
      total: 1489400
    },
    {
      order_id: 6,
      customer_id: 18,
      order_date: "2024-03-10T19:50:53.000Z",
      subtotal: 1525000,
      discount: 0,
      sale_tax: 152500,
      total: 1677500
    },
    {
      order_id: 446,
      customer_id: 33,
      order_date: "2024-10-25T12:52:53.000Z",
      subtotal: 3685000,
      discount: 0,
      sale_tax: 368500,
      total: 4053500
    },
    {
      order_id: 749,
      customer_id: 35,
      order_date: "2024-09-21T04:17:04.000Z",
      subtotal: 1216000,
      discount: 0,
      sale_tax: 121600,
      total: 1337600
    },
    {
      order_id: 86,
      customer_id: 24,
      order_date: "2024-03-04T13:09:10.000Z",
      subtotal: 92000,
      discount: 0,
      sale_tax: 9200,
      total: 101200
    },
    {
      order_id: 920,
      customer_id: 27,
      order_date: "2024-01-25T04:28:04.000Z",
      subtotal: 1777000,
      discount: 0,
      sale_tax: 177700,
      total: 1954700
    },
    {
      order_id: 219,
      customer_id: 7,
      order_date: "2024-08-09T14:01:09.000Z",
      subtotal: 1998000,
      discount: 0,
      sale_tax: 199800,
      total: 2197800
    },
    {
      order_id: 363,
      customer_id: 12,
      order_date: "2024-03-18T01:46:06.000Z",
      subtotal: 480000,
      discount: 0,
      sale_tax: 48000,
      total: 528000
    },
    {
      order_id: 231,
      customer_id: 37,
      order_date: "2024-04-06T03:25:54.000Z",
      subtotal: 829000,
      discount: 0,
      sale_tax: 82900,
      total: 911900
    },
    {
      order_id: 66,
      customer_id: 11,
      order_date: "2024-06-28T07:38:44.000Z",
      subtotal: 169000,
      discount: 0,
      sale_tax: 16900,
      total: 185900
    },
    {
      order_id: 661,
      customer_id: 16,
      order_date: "2024-02-24T02:27:40.000Z",
      subtotal: 100000,
      discount: 0,
      sale_tax: 10000,
      total: 110000
    },
    {
      order_id: 512,
      customer_id: 30,
      order_date: "2024-05-06T09:30:06.000Z",
      subtotal: 405000,
      discount: 0,
      sale_tax: 40500,
      total: 445500
    },
    {
      order_id: 340,
      customer_id: 13,
      order_date: "2024-08-02T17:34:10.000Z",
      subtotal: 641000,
      discount: 0,
      sale_tax: 64100,
      total: 705100
    },
    {
      order_id: 873,
      customer_id: 37,
      order_date: "2024-06-29T05:53:05.000Z",
      subtotal: 1204000,
      discount: 0,
      sale_tax: 120400,
      total: 1324400
    },
    {
      order_id: 523,
      customer_id: 5,
      order_date: "2024-07-20T05:07:00.000Z",
      subtotal: 1811000,
      discount: 0,
      sale_tax: 181100,
      total: 1992100
    },
    {
      order_id: 356,
      customer_id: 6,
      order_date: "2024-04-11T09:37:32.000Z",
      subtotal: 4122000,
      discount: 0,
      sale_tax: 412200,
      total: 4534200
    },
    {
      order_id: 458,
      customer_id: 5,
      order_date: "2024-04-11T04:29:35.000Z",
      subtotal: 369000,
      discount: 0,
      sale_tax: 36900,
      total: 405900
    },
    {
      order_id: 414,
      customer_id: 9,
      order_date: "2024-06-03T14:02:49.000Z",
      subtotal: 3736000,
      discount: 0,
      sale_tax: 373600,
      total: 4109600
    },
    {
      order_id: 640,
      customer_id: 8,
      order_date: "2024-05-31T17:22:31.000Z",
      subtotal: 1671000,
      discount: 0,
      sale_tax: 167100,
      total: 1838100
    },
    {
      order_id: 368,
      customer_id: 4,
      order_date: "2024-02-02T00:15:57.000Z",
      subtotal: 459000,
      discount: 0,
      sale_tax: 45900,
      total: 504900
    },
    {
      order_id: 735,
      customer_id: 16,
      order_date: "2024-01-10T06:31:14.000Z",
      subtotal: 916000,
      discount: 0,
      sale_tax: 91600,
      total: 1007600
    },
    {
      order_id: 538,
      customer_id: 32,
      order_date: "2024-07-02T19:57:57.000Z",
      subtotal: 4424000,
      discount: 0,
      sale_tax: 442400,
      total: 4866400
    },
    {
      order_id: 166,
      customer_id: 39,
      order_date: "2024-08-31T08:47:32.000Z",
      subtotal: 1305000,
      discount: 0,
      sale_tax: 130500,
      total: 1435500
    },
    {
      order_id: 595,
      customer_id: 31,
      order_date: "2023-12-31T17:15:55.000Z",
      subtotal: 970000,
      discount: 0,
      sale_tax: 97000,
      total: 1067000
    },
    {
      order_id: 142,
      customer_id: 20,
      order_date: "2024-03-13T18:00:35.000Z",
      subtotal: 687000,
      discount: 0,
      sale_tax: 68700,
      total: 755700
    },
    {
      order_id: 924,
      customer_id: 40,
      order_date: "2024-12-11T10:57:10.000Z",
      subtotal: 1778000,
      discount: 0,
      sale_tax: 177800,
      total: 1955800
    },
    {
      order_id: 872,
      customer_id: 44,
      order_date: "2024-02-29T13:04:42.000Z",
      subtotal: 209000,
      discount: 0,
      sale_tax: 20900,
      total: 229900
    },
    {
      order_id: 410,
      customer_id: 12,
      order_date: "2024-06-30T01:22:05.000Z",
      subtotal: 1105000,
      discount: 0,
      sale_tax: 110500,
      total: 1215500
    },
    {
      order_id: 792,
      customer_id: 8,
      order_date: "2024-10-20T14:56:00.000Z",
      subtotal: 1095000,
      discount: 0,
      sale_tax: 109500,
      total: 1204500
    },
    {
      order_id: 896,
      customer_id: 29,
      order_date: "2024-10-09T07:57:55.000Z",
      subtotal: 933000,
      discount: 0,
      sale_tax: 93300,
      total: 1026300
    },
    {
      order_id: 651,
      customer_id: 33,
      order_date: "2024-01-03T09:13:34.000Z",
      subtotal: 2590000,
      discount: 0,
      sale_tax: 259000,
      total: 2849000
    },
    {
      order_id: 381,
      customer_id: 17,
      order_date: "2024-05-21T10:05:23.000Z",
      subtotal: 1921000,
      discount: 0,
      sale_tax: 192100,
      total: 2113100
    },
    {
      order_id: 38,
      customer_id: 24,
      order_date: "2024-11-20T15:22:38.000Z",
      subtotal: 3139000,
      discount: 0,
      sale_tax: 313900,
      total: 3452900
    },
    {
      order_id: 359,
      customer_id: 48,
      order_date: "2024-03-05T19:14:45.000Z",
      subtotal: 1879000,
      discount: 0,
      sale_tax: 187900,
      total: 2066900
    },
    {
      order_id: 597,
      customer_id: 27,
      order_date: "2024-11-23T11:44:19.000Z",
      subtotal: 4833000,
      discount: 0,
      sale_tax: 483300,
      total: 5316300
    },
    {
      order_id: 193,
      customer_id: 37,
      order_date: "2024-08-13T13:01:19.000Z",
      subtotal: 2409000,
      discount: 0,
      sale_tax: 240900,
      total: 2649900
    },
    {
      order_id: 730,
      customer_id: 45,
      order_date: "2024-06-07T10:03:06.000Z",
      subtotal: 1070000,
      discount: 0,
      sale_tax: 107000,
      total: 1177000
    },
    {
      order_id: 548,
      customer_id: 49,
      order_date: "2024-08-02T02:57:07.000Z",
      subtotal: 3253000,
      discount: 0,
      sale_tax: 325300,
      total: 3578300
    },
    {
      order_id: 217,
      customer_id: 9,
      order_date: "2024-09-21T03:55:21.000Z",
      subtotal: 1778000,
      discount: 0,
      sale_tax: 177800,
      total: 1955800
    },
    {
      order_id: 709,
      customer_id: 23,
      order_date: "2024-05-04T03:34:05.000Z",
      subtotal: 998000,
      discount: 0,
      sale_tax: 99800,
      total: 1097800
    },
    {
      order_id: 47,
      customer_id: 43,
      order_date: "2024-09-27T10:12:25.000Z",
      subtotal: 537000,
      discount: 0,
      sale_tax: 53700,
      total: 590700
    },
    {
      order_id: 886,
      customer_id: 48,
      order_date: "2024-11-16T08:11:11.000Z",
      subtotal: 2116000,
      discount: 0,
      sale_tax: 211600,
      total: 2327600
    },
    {
      order_id: 177,
      customer_id: 32,
      order_date: "2024-01-20T05:40:39.000Z",
      subtotal: 1889000,
      discount: 0,
      sale_tax: 188900,
      total: 2077900
    },
    {
      order_id: 727,
      customer_id: 44,
      order_date: "2024-09-03T04:37:27.000Z",
      subtotal: 2712000,
      discount: 0,
      sale_tax: 271200,
      total: 2983200
    },
    {
      order_id: 985,
      customer_id: 38,
      order_date: "2024-01-08T03:15:32.000Z",
      subtotal: 1999000,
      discount: 0,
      sale_tax: 199900,
      total: 2198900
    },
    {
      order_id: 810,
      customer_id: 27,
      order_date: "2024-04-07T09:05:50.000Z",
      subtotal: 3535000,
      discount: 0,
      sale_tax: 353500,
      total: 3888500
    },
    {
      order_id: 779,
      customer_id: 43,
      order_date: "2024-09-06T08:28:42.000Z",
      subtotal: 294000,
      discount: 0,
      sale_tax: 29400,
      total: 323400
    },
    {
      order_id: 110,
      customer_id: 16,
      order_date: "2024-08-08T22:07:34.000Z",
      subtotal: 1404000,
      discount: 0,
      sale_tax: 140400,
      total: 1544400
    },
    {
      order_id: 931,
      customer_id: 30,
      order_date: "2024-04-25T05:17:04.000Z",
      subtotal: 816000,
      discount: 0,
      sale_tax: 81600,
      total: 897600
    },
    {
      order_id: 145,
      customer_id: 43,
      order_date: "2024-05-07T20:52:56.000Z",
      subtotal: 3122000,
      discount: 0,
      sale_tax: 312200,
      total: 3434200
    },
    {
      order_id: 557,
      customer_id: 27,
      order_date: "2024-06-21T21:23:12.000Z",
      subtotal: 897000,
      discount: 0,
      sale_tax: 89700,
      total: 986700
    },
    {
      order_id: 718,
      customer_id: 5,
      order_date: "2024-03-14T04:37:51.000Z",
      subtotal: 2503000,
      discount: 0,
      sale_tax: 250300,
      total: 2753300
    },
    {
      order_id: 623,
      customer_id: 23,
      order_date: "2024-09-13T03:15:32.000Z",
      subtotal: 973000,
      discount: 0,
      sale_tax: 97300,
      total: 1070300
    },
    {
      order_id: 485,
      customer_id: 39,
      order_date: "2024-02-17T15:15:33.000Z",
      subtotal: 1079000,
      discount: 0,
      sale_tax: 107900,
      total: 1186900
    },
    {
      order_id: 229,
      customer_id: 42,
      order_date: "2024-09-09T10:16:11.000Z",
      subtotal: 3108000,
      discount: 0,
      sale_tax: 310800,
      total: 3418800
    },
    {
      order_id: 559,
      customer_id: 43,
      order_date: "2024-11-21T19:24:05.000Z",
      subtotal: 2450000,
      discount: 0,
      sale_tax: 245000,
      total: 2695000
    },
    {
      order_id: 788,
      customer_id: 20,
      order_date: "2024-09-10T14:22:15.000Z",
      subtotal: 1310000,
      discount: 0,
      sale_tax: 131000,
      total: 1441000
    },
    {
      order_id: 304,
      customer_id: 14,
      order_date: "2024-01-07T22:14:47.000Z",
      subtotal: 4218000,
      discount: 0,
      sale_tax: 421800,
      total: 4639800
    },
    {
      order_id: 52,
      customer_id: 45,
      order_date: "2024-08-16T13:57:21.000Z",
      subtotal: 434000,
      discount: 0,
      sale_tax: 43400,
      total: 477400
    },
    {
      order_id: 633,
      customer_id: 26,
      order_date: "2024-07-26T03:23:13.000Z",
      subtotal: 1990000,
      discount: 0,
      sale_tax: 199000,
      total: 2189000
    },
    {
      order_id: 341,
      customer_id: 29,
      order_date: "2024-10-02T03:22:58.000Z",
      subtotal: 1470000,
      discount: 0,
      sale_tax: 147000,
      total: 1617000
    },
    {
      order_id: 450,
      customer_id: 11,
      order_date: "2024-07-03T17:02:02.000Z",
      subtotal: 2997000,
      discount: 0,
      sale_tax: 299700,
      total: 3296700
    },
    {
      order_id: 900,
      customer_id: 22,
      order_date: "2024-05-30T18:47:07.000Z",
      subtotal: 469000,
      discount: 0,
      sale_tax: 46900,
      total: 515900
    },
    {
      order_id: 405,
      customer_id: 47,
      order_date: "2024-02-19T22:46:58.000Z",
      subtotal: 805000,
      discount: 0,
      sale_tax: 80500,
      total: 885500
    },
    {
      order_id: 170,
      customer_id: 25,
      order_date: "2024-02-21T07:09:07.000Z",
      subtotal: 537000,
      discount: 0,
      sale_tax: 53700,
      total: 590700
    },
    {
      order_id: 996,
      customer_id: 38,
      order_date: "2024-02-11T06:05:41.000Z",
      subtotal: 2202000,
      discount: 0,
      sale_tax: 220200,
      total: 2422200
    },
    {
      order_id: 762,
      customer_id: 20,
      order_date: "2024-02-12T21:30:39.000Z",
      subtotal: 2204000,
      discount: 0,
      sale_tax: 220400,
      total: 2424400
    },
    {
      order_id: 712,
      customer_id: 5,
      order_date: "2024-05-21T09:11:30.000Z",
      subtotal: 2334000,
      discount: 0,
      sale_tax: 233400,
      total: 2567400
    },
    {
      order_id: 192,
      customer_id: 36,
      order_date: "2024-07-27T02:27:54.000Z",
      subtotal: 744000,
      discount: 0,
      sale_tax: 74400,
      total: 818400
    },
    {
      order_id: 513,
      customer_id: 39,
      order_date: "2024-10-16T08:58:12.000Z",
      subtotal: 4085000,
      discount: 0,
      sale_tax: 408500,
      total: 4493500
    },
    {
      order_id: 101,
      customer_id: 1,
      order_date: "2024-11-25T11:48:14.000Z",
      subtotal: 2321000,
      discount: 0,
      sale_tax: 232100,
      total: 2553100
    },
    {
      order_id: 473,
      customer_id: 48,
      order_date: "2024-06-12T06:23:14.000Z",
      subtotal: 2538000,
      discount: 0,
      sale_tax: 253800,
      total: 2791800
    },
    {
      order_id: 69,
      customer_id: 35,
      order_date: "2024-08-09T10:54:50.000Z",
      subtotal: 796000,
      discount: 0,
      sale_tax: 79600,
      total: 875600
    },
    {
      order_id: 878,
      customer_id: 15,
      order_date: "2024-03-24T11:14:04.000Z",
      subtotal: 3336000,
      discount: 0,
      sale_tax: 333600,
      total: 3669600
    },
    {
      order_id: 679,
      customer_id: 29,
      order_date: "2024-11-04T17:35:10.000Z",
      subtotal: 3543000,
      discount: 0,
      sale_tax: 354300,
      total: 3897300
    },
    {
      order_id: 983,
      customer_id: 6,
      order_date: "2024-01-13T04:33:28.000Z",
      subtotal: 766000,
      discount: 0,
      sale_tax: 76600,
      total: 842600
    },
    {
      order_id: 375,
      customer_id: 32,
      order_date: "2024-05-24T21:17:43.000Z",
      subtotal: 2386000,
      discount: 0,
      sale_tax: 238600,
      total: 2624600
    },
    {
      order_id: 415,
      customer_id: 6,
      order_date: "2024-02-01T17:46:12.000Z",
      subtotal: 1075000,
      discount: 0,
      sale_tax: 107500,
      total: 1182500
    },
    {
      order_id: 976,
      customer_id: 5,
      order_date: "2024-11-13T05:36:14.000Z",
      subtotal: 3591000,
      discount: 0,
      sale_tax: 359100,
      total: 3950100
    },
    {
      order_id: 729,
      customer_id: 23,
      order_date: "2024-10-01T17:29:09.000Z",
      subtotal: 865000,
      discount: 0,
      sale_tax: 86500,
      total: 951500
    },
    {
      order_id: 680,
      customer_id: 21,
      order_date: "2024-09-21T13:16:12.000Z",
      subtotal: 2714000,
      discount: 0,
      sale_tax: 271400,
      total: 2985400
    },
    {
      order_id: 408,
      customer_id: 34,
      order_date: "2024-03-14T19:55:35.000Z",
      subtotal: 1995000,
      discount: 0,
      sale_tax: 199500,
      total: 2194500
    },
    {
      order_id: 782,
      customer_id: 13,
      order_date: "2024-10-29T19:33:50.000Z",
      subtotal: 2608000,
      discount: 0,
      sale_tax: 260800,
      total: 2868800
    },
    {
      order_id: 689,
      customer_id: 3,
      order_date: "2024-11-29T18:49:32.000Z",
      subtotal: 828000,
      discount: 0,
      sale_tax: 82800,
      total: 910800
    },
    {
      order_id: 982,
      customer_id: 25,
      order_date: "2024-05-21T09:04:25.000Z",
      subtotal: 1022000,
      discount: 0,
      sale_tax: 102200,
      total: 1124200
    },
    {
      order_id: 522,
      customer_id: 16,
      order_date: "2024-07-27T13:07:11.000Z",
      subtotal: 994000,
      discount: 0,
      sale_tax: 99400,
      total: 1093400
    },
    {
      order_id: 674,
      customer_id: 31,
      order_date: "2024-07-02T03:09:34.000Z",
      subtotal: 1391000,
      discount: 0,
      sale_tax: 139100,
      total: 1530100
    },
    {
      order_id: 630,
      customer_id: 7,
      order_date: "2024-10-05T22:14:07.000Z",
      subtotal: 2494000,
      discount: 0,
      sale_tax: 249400,
      total: 2743400
    },
    {
      order_id: 11,
      customer_id: 25,
      order_date: "2024-06-15T01:54:23.000Z",
      subtotal: 2015000,
      discount: 0,
      sale_tax: 201500,
      total: 2216500
    },
    {
      order_id: 575,
      customer_id: 33,
      order_date: "2024-09-22T05:43:45.000Z",
      subtotal: 567000,
      discount: 0,
      sale_tax: 56700,
      total: 623700
    },
    {
      order_id: 821,
      customer_id: 22,
      order_date: "2024-07-20T05:41:46.000Z",
      subtotal: 1072000,
      discount: 0,
      sale_tax: 107200,
      total: 1179200
    },
    {
      order_id: 401,
      customer_id: 12,
      order_date: "2024-11-24T01:58:53.000Z",
      subtotal: 1380000,
      discount: 0,
      sale_tax: 138000,
      total: 1518000
    },
    {
      order_id: 659,
      customer_id: 45,
      order_date: "2024-11-27T09:48:21.000Z",
      subtotal: 324000,
      discount: 0,
      sale_tax: 32400,
      total: 356400
    },
    {
      order_id: 739,
      customer_id: 5,
      order_date: "2024-06-25T07:57:56.000Z",
      subtotal: 2540000,
      discount: 0,
      sale_tax: 254000,
      total: 2794000
    },
    {
      order_id: 279,
      customer_id: 19,
      order_date: "2024-07-08T21:12:10.000Z",
      subtotal: 3151000,
      discount: 0,
      sale_tax: 315100,
      total: 3466100
    },
    {
      order_id: 9,
      customer_id: 49,
      order_date: "2024-09-13T07:17:34.000Z",
      subtotal: 798000,
      discount: 0,
      sale_tax: 79800,
      total: 877800
    },
    {
      order_id: 903,
      customer_id: 31,
      order_date: "2024-05-18T08:49:53.000Z",
      subtotal: 2661000,
      discount: 0,
      sale_tax: 266100,
      total: 2927100
    },
    {
      order_id: 741,
      customer_id: 14,
      order_date: "2024-11-08T17:01:46.000Z",
      subtotal: 495000,
      discount: 0,
      sale_tax: 49500,
      total: 544500
    },
    {
      order_id: 716,
      customer_id: 47,
      order_date: "2024-05-16T23:28:01.000Z",
      subtotal: 4016000,
      discount: 0,
      sale_tax: 401600,
      total: 4417600
    },
    {
      order_id: 897,
      customer_id: 35,
      order_date: "2024-06-05T11:08:26.000Z",
      subtotal: 2849000,
      discount: 0,
      sale_tax: 284900,
      total: 3133900
    },
    {
      order_id: 543,
      customer_id: 4,
      order_date: "2024-12-04T14:06:21.000Z",
      subtotal: 1235000,
      discount: 0,
      sale_tax: 123500,
      total: 1358500
    },
    {
      order_id: 736,
      customer_id: 14,
      order_date: "2024-07-30T07:04:42.000Z",
      subtotal: 2265000,
      discount: 0,
      sale_tax: 226500,
      total: 2491500
    },
    {
      order_id: 565,
      customer_id: 29,
      order_date: "2024-07-07T00:50:30.000Z",
      subtotal: 936000,
      discount: 0,
      sale_tax: 93600,
      total: 1029600
    },
    {
      order_id: 566,
      customer_id: 20,
      order_date: "2024-01-01T18:55:20.000Z",
      subtotal: 633000,
      discount: 0,
      sale_tax: 63300,
      total: 696300
    },
    {
      order_id: 457,
      customer_id: 9,
      order_date: "2024-10-16T11:49:07.000Z",
      subtotal: 1477000,
      discount: 0,
      sale_tax: 147700,
      total: 1624700
    },
    {
      order_id: 85,
      customer_id: 8,
      order_date: "2024-09-08T19:58:24.000Z",
      subtotal: 3870000,
      discount: 0,
      sale_tax: 387000,
      total: 4257000
    },
    {
      order_id: 592,
      customer_id: 27,
      order_date: "2024-09-28T05:55:20.000Z",
      subtotal: 793000,
      discount: 0,
      sale_tax: 79300,
      total: 872300
    },
    {
      order_id: 281,
      customer_id: 46,
      order_date: "2024-12-02T20:08:39.000Z",
      subtotal: 3092000,
      discount: 0,
      sale_tax: 309200,
      total: 3401200
    },
    {
      order_id: 687,
      customer_id: 12,
      order_date: "2024-10-21T00:08:01.000Z",
      subtotal: 1098000,
      discount: 0,
      sale_tax: 109800,
      total: 1207800
    },
    {
      order_id: 553,
      customer_id: 2,
      order_date: "2024-03-07T14:02:37.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 302,
      customer_id: 43,
      order_date: "2024-05-08T13:20:58.000Z",
      subtotal: 966000,
      discount: 0,
      sale_tax: 96600,
      total: 1062600
    },
    {
      order_id: 288,
      customer_id: 40,
      order_date: "2024-10-28T19:23:22.000Z",
      subtotal: 2981000,
      discount: 0,
      sale_tax: 298100,
      total: 3279100
    },
    {
      order_id: 21,
      customer_id: 6,
      order_date: "2024-02-29T12:45:35.000Z",
      subtotal: 322000,
      discount: 0,
      sale_tax: 32200,
      total: 354200
    },
    {
      order_id: 622,
      customer_id: 22,
      order_date: "2024-11-20T08:00:39.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 927,
      customer_id: 21,
      order_date: "2024-06-16T11:14:00.000Z",
      subtotal: 1345000,
      discount: 0,
      sale_tax: 134500,
      total: 1479500
    },
    {
      order_id: 774,
      customer_id: 42,
      order_date: "2024-04-11T14:19:52.000Z",
      subtotal: 54000,
      discount: 0,
      sale_tax: 5400,
      total: 59400
    },
    {
      order_id: 398,
      customer_id: 28,
      order_date: "2024-08-10T14:33:37.000Z",
      subtotal: 847000,
      discount: 0,
      sale_tax: 84700,
      total: 931700
    },
    {
      order_id: 635,
      customer_id: 48,
      order_date: "2024-10-16T22:44:36.000Z",
      subtotal: 1357000,
      discount: 0,
      sale_tax: 135700,
      total: 1492700
    },
    {
      order_id: 388,
      customer_id: 44,
      order_date: "2024-04-28T15:00:17.000Z",
      subtotal: 3102000,
      discount: 0,
      sale_tax: 310200,
      total: 3412200
    },
    {
      order_id: 165,
      customer_id: 48,
      order_date: "2024-05-27T12:26:27.000Z",
      subtotal: 1197000,
      discount: 0,
      sale_tax: 119700,
      total: 1316700
    },
    {
      order_id: 56,
      customer_id: 29,
      order_date: "2024-03-28T07:21:20.000Z",
      subtotal: 525000,
      discount: 0,
      sale_tax: 52500,
      total: 577500
    },
    {
      order_id: 151,
      customer_id: 36,
      order_date: "2024-12-15T06:57:53.000Z",
      subtotal: 2482000,
      discount: 0,
      sale_tax: 248200,
      total: 2730200
    },
    {
      order_id: 820,
      customer_id: 30,
      order_date: "2024-03-20T10:36:00.000Z",
      subtotal: 2455000,
      discount: 0,
      sale_tax: 245500,
      total: 2700500
    },
    {
      order_id: 992,
      customer_id: 20,
      order_date: "2024-11-28T09:58:18.000Z",
      subtotal: 2563000,
      discount: 0,
      sale_tax: 256300,
      total: 2819300
    },
    {
      order_id: 620,
      customer_id: 25,
      order_date: "2024-02-23T19:44:45.000Z",
      subtotal: 4292000,
      discount: 0,
      sale_tax: 429200,
      total: 4721200
    },
    {
      order_id: 803,
      customer_id: 47,
      order_date: "2024-01-19T04:15:16.000Z",
      subtotal: 2384000,
      discount: 0,
      sale_tax: 238400,
      total: 2622400
    },
    {
      order_id: 305,
      customer_id: 47,
      order_date: "2024-08-09T12:40:10.000Z",
      subtotal: 459000,
      discount: 0,
      sale_tax: 45900,
      total: 504900
    },
    {
      order_id: 54,
      customer_id: 9,
      order_date: "2024-05-20T13:50:37.000Z",
      subtotal: 3520000,
      discount: 0,
      sale_tax: 352000,
      total: 3872000
    },
    {
      order_id: 181,
      customer_id: 32,
      order_date: "2024-07-07T10:23:48.000Z",
      subtotal: 2550000,
      discount: 0,
      sale_tax: 255000,
      total: 2805000
    },
    {
      order_id: 743,
      customer_id: 20,
      order_date: "2024-02-09T08:38:05.000Z",
      subtotal: 1828000,
      discount: 0,
      sale_tax: 182800,
      total: 2010800
    },
    {
      order_id: 10,
      customer_id: 18,
      order_date: "2024-03-05T19:27:12.000Z",
      subtotal: 844000,
      discount: 0,
      sale_tax: 84400,
      total: 928400
    },
    {
      order_id: 35,
      customer_id: 38,
      order_date: "2024-05-23T11:47:37.000Z",
      subtotal: 616000,
      discount: 0,
      sale_tax: 61600,
      total: 677600
    },
    {
      order_id: 963,
      customer_id: 2,
      order_date: "2024-01-07T05:47:54.000Z",
      subtotal: 648000,
      discount: 0,
      sale_tax: 64800,
      total: 712800
    },
    {
      order_id: 220,
      customer_id: 10,
      order_date: "2024-05-11T22:32:49.000Z",
      subtotal: 1171000,
      discount: 0,
      sale_tax: 117100,
      total: 1288100
    },
    {
      order_id: 823,
      customer_id: 37,
      order_date: "2024-03-10T17:35:05.000Z",
      subtotal: 256000,
      discount: 0,
      sale_tax: 25600,
      total: 281600
    },
    {
      order_id: 822,
      customer_id: 37,
      order_date: "2024-06-27T12:33:24.000Z",
      subtotal: 250000,
      discount: 0,
      sale_tax: 25000,
      total: 275000
    },
    {
      order_id: 400,
      customer_id: 29,
      order_date: "2024-07-23T07:34:10.000Z",
      subtotal: 199000,
      discount: 0,
      sale_tax: 19900,
      total: 218900
    },
    {
      order_id: 241,
      customer_id: 35,
      order_date: "2024-08-30T19:22:11.000Z",
      subtotal: 2096000,
      discount: 0,
      sale_tax: 209600,
      total: 2305600
    },
    {
      order_id: 175,
      customer_id: 15,
      order_date: "2024-06-25T09:20:52.000Z",
      subtotal: 1796000,
      discount: 0,
      sale_tax: 179600,
      total: 1975600
    },
    {
      order_id: 596,
      customer_id: 7,
      order_date: "2024-08-25T10:31:32.000Z",
      subtotal: 322000,
      discount: 0,
      sale_tax: 32200,
      total: 354200
    },
    {
      order_id: 285,
      customer_id: 16,
      order_date: "2024-10-29T04:02:00.000Z",
      subtotal: 4965000,
      discount: 0,
      sale_tax: 496500,
      total: 5461500
    },
    {
      order_id: 50,
      customer_id: 48,
      order_date: "2024-08-23T14:10:35.000Z",
      subtotal: 2216000,
      discount: 0,
      sale_tax: 221600,
      total: 2437600
    },
    {
      order_id: 13,
      customer_id: 4,
      order_date: "2024-11-10T04:45:36.000Z",
      subtotal: 2389000,
      discount: 0,
      sale_tax: 238900,
      total: 2627900
    },
    {
      order_id: 391,
      customer_id: 36,
      order_date: "2024-05-27T21:44:12.000Z",
      subtotal: 1897000,
      discount: 0,
      sale_tax: 189700,
      total: 2086700
    },
    {
      order_id: 487,
      customer_id: 29,
      order_date: "2024-10-29T13:14:39.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 2,
      customer_id: 13,
      order_date: "2024-12-14T00:39:52.000Z",
      subtotal: 2851000,
      discount: 0,
      sale_tax: 285100,
      total: 3136100
    },
    {
      order_id: 699,
      customer_id: 23,
      order_date: "2024-01-31T21:39:05.000Z",
      subtotal: 2794000,
      discount: 0,
      sale_tax: 279400,
      total: 3073400
    },
    {
      order_id: 246,
      customer_id: 31,
      order_date: "2024-12-29T06:37:04.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 75,
      customer_id: 45,
      order_date: "2024-04-30T12:39:28.000Z",
      subtotal: 1602000,
      discount: 0,
      sale_tax: 160200,
      total: 1762200
    },
    {
      order_id: 128,
      customer_id: 26,
      order_date: "2024-10-26T22:16:07.000Z",
      subtotal: 1113000,
      discount: 0,
      sale_tax: 111300,
      total: 1224300
    },
    {
      order_id: 714,
      customer_id: 12,
      order_date: "2024-02-01T10:06:37.000Z",
      subtotal: 1325000,
      discount: 0,
      sale_tax: 132500,
      total: 1457500
    },
    {
      order_id: 344,
      customer_id: 23,
      order_date: "2024-01-15T17:53:20.000Z",
      subtotal: 1197000,
      discount: 0,
      sale_tax: 119700,
      total: 1316700
    },
    {
      order_id: 906,
      customer_id: 16,
      order_date: "2024-05-14T01:45:49.000Z",
      subtotal: 189000,
      discount: 0,
      sale_tax: 18900,
      total: 207900
    },
    {
      order_id: 909,
      customer_id: 16,
      order_date: "2024-07-22T20:05:00.000Z",
      subtotal: 886000,
      discount: 0,
      sale_tax: 88600,
      total: 974600
    },
    {
      order_id: 323,
      customer_id: 42,
      order_date: "2024-11-28T08:01:57.000Z",
      subtotal: 4529000,
      discount: 0,
      sale_tax: 452900,
      total: 4981900
    },
    {
      order_id: 348,
      customer_id: 45,
      order_date: "2024-03-06T03:34:40.000Z",
      subtotal: 1263000,
      discount: 0,
      sale_tax: 126300,
      total: 1389300
    },
    {
      order_id: 337,
      customer_id: 33,
      order_date: "2024-08-18T12:33:35.000Z",
      subtotal: 3176000,
      discount: 0,
      sale_tax: 317600,
      total: 3493600
    },
    {
      order_id: 504,
      customer_id: 48,
      order_date: "2024-03-09T00:06:38.000Z",
      subtotal: 3969000,
      discount: 0,
      sale_tax: 396900,
      total: 4365900
    },
    {
      order_id: 399,
      customer_id: 20,
      order_date: "2024-01-12T12:53:23.000Z",
      subtotal: 2113000,
      discount: 0,
      sale_tax: 211300,
      total: 2324300
    },
    {
      order_id: 238,
      customer_id: 36,
      order_date: "2024-06-20T07:53:05.000Z",
      subtotal: 2667000,
      discount: 0,
      sale_tax: 266700,
      total: 2933700
    },
    {
      order_id: 112,
      customer_id: 10,
      order_date: "2024-03-22T14:34:57.000Z",
      subtotal: 1857000,
      discount: 0,
      sale_tax: 185700,
      total: 2042700
    },
    {
      order_id: 560,
      customer_id: 40,
      order_date: "2024-07-16T06:06:31.000Z",
      subtotal: 2599000,
      discount: 0,
      sale_tax: 259900,
      total: 2858900
    },
    {
      order_id: 547,
      customer_id: 29,
      order_date: "2024-09-16T06:32:45.000Z",
      subtotal: 1347000,
      discount: 0,
      sale_tax: 134700,
      total: 1481700
    },
    {
      order_id: 818,
      customer_id: 32,
      order_date: "2024-12-13T07:52:58.000Z",
      subtotal: 1711000,
      discount: 0,
      sale_tax: 171100,
      total: 1882100
    },
    {
      order_id: 613,
      customer_id: 41,
      order_date: "2024-07-01T14:31:56.000Z",
      subtotal: 2574000,
      discount: 0,
      sale_tax: 257400,
      total: 2831400
    },
    {
      order_id: 268,
      customer_id: 10,
      order_date: "2024-10-24T04:16:28.000Z",
      subtotal: 1378000,
      discount: 0,
      sale_tax: 137800,
      total: 1515800
    },
    {
      order_id: 737,
      customer_id: 26,
      order_date: "2024-03-11T11:31:58.000Z",
      subtotal: 394000,
      discount: 0,
      sale_tax: 39400,
      total: 433400
    },
    {
      order_id: 569,
      customer_id: 26,
      order_date: "2024-11-18T22:27:16.000Z",
      subtotal: 2447000,
      discount: 0,
      sale_tax: 244700,
      total: 2691700
    },
    {
      order_id: 124,
      customer_id: 45,
      order_date: "2024-11-24T23:42:33.000Z",
      subtotal: 294000,
      discount: 0,
      sale_tax: 29400,
      total: 323400
    },
    {
      order_id: 615,
      customer_id: 12,
      order_date: "2024-05-26T19:01:06.000Z",
      subtotal: 1314000,
      discount: 0,
      sale_tax: 131400,
      total: 1445400
    },
    {
      order_id: 452,
      customer_id: 17,
      order_date: "2024-06-27T22:08:56.000Z",
      subtotal: 1572000,
      discount: 0,
      sale_tax: 157200,
      total: 1729200
    },
    {
      order_id: 798,
      customer_id: 44,
      order_date: "2024-06-23T23:35:11.000Z",
      subtotal: 491000,
      discount: 0,
      sale_tax: 49100,
      total: 540100
    },
    {
      order_id: 830,
      customer_id: 44,
      order_date: "2024-04-14T00:14:14.000Z",
      subtotal: 2354000,
      discount: 0,
      sale_tax: 235400,
      total: 2589400
    },
    {
      order_id: 200,
      customer_id: 38,
      order_date: "2024-08-22T04:51:04.000Z",
      subtotal: 2793000,
      discount: 0,
      sale_tax: 279300,
      total: 3072300
    },
    {
      order_id: 988,
      customer_id: 36,
      order_date: "2024-01-03T03:18:53.000Z",
      subtotal: 1101000,
      discount: 0,
      sale_tax: 110100,
      total: 1211100
    },
    {
      order_id: 964,
      customer_id: 1,
      order_date: "2024-10-28T18:46:47.000Z",
      subtotal: 2695000,
      discount: 0,
      sale_tax: 269500,
      total: 2964500
    },
    {
      order_id: 601,
      customer_id: 27,
      order_date: "2024-10-21T11:04:22.000Z",
      subtotal: 507000,
      discount: 0,
      sale_tax: 50700,
      total: 557700
    },
    {
      order_id: 590,
      customer_id: 4,
      order_date: "2024-12-24T14:44:00.000Z",
      subtotal: 3366000,
      discount: 0,
      sale_tax: 336600,
      total: 3702600
    },
    {
      order_id: 82,
      customer_id: 17,
      order_date: "2024-03-27T04:02:32.000Z",
      subtotal: 2357000,
      discount: 0,
      sale_tax: 235700,
      total: 2592700
    },
    {
      order_id: 990,
      customer_id: 42,
      order_date: "2024-07-19T23:46:08.000Z",
      subtotal: 704000,
      discount: 0,
      sale_tax: 70400,
      total: 774400
    },
    {
      order_id: 202,
      customer_id: 26,
      order_date: "2024-05-01T03:33:54.000Z",
      subtotal: 1755000,
      discount: 0,
      sale_tax: 175500,
      total: 1930500
    },
    {
      order_id: 685,
      customer_id: 46,
      order_date: "2024-08-04T15:36:58.000Z",
      subtotal: 2113000,
      discount: 0,
      sale_tax: 211300,
      total: 2324300
    },
    {
      order_id: 905,
      customer_id: 3,
      order_date: "2024-02-09T01:19:08.000Z",
      subtotal: 1628000,
      discount: 0,
      sale_tax: 162800,
      total: 1790800
    },
    {
      order_id: 973,
      customer_id: 14,
      order_date: "2024-01-21T05:15:01.000Z",
      subtotal: 2990000,
      discount: 0,
      sale_tax: 299000,
      total: 3289000
    },
    {
      order_id: 894,
      customer_id: 43,
      order_date: "2024-10-03T22:56:52.000Z",
      subtotal: 3232000,
      discount: 0,
      sale_tax: 323200,
      total: 3555200
    },
    {
      order_id: 245,
      customer_id: 3,
      order_date: "2024-01-16T20:25:42.000Z",
      subtotal: 827000,
      discount: 0,
      sale_tax: 82700,
      total: 909700
    },
    {
      order_id: 205,
      customer_id: 37,
      order_date: "2024-07-14T18:54:15.000Z",
      subtotal: 2490000,
      discount: 0,
      sale_tax: 249000,
      total: 2739000
    },
    {
      order_id: 67,
      customer_id: 5,
      order_date: "2024-05-06T14:48:45.000Z",
      subtotal: 1968000,
      discount: 0,
      sale_tax: 196800,
      total: 2164800
    },
    {
      order_id: 325,
      customer_id: 8,
      order_date: "2024-06-19T00:46:39.000Z",
      subtotal: 2384000,
      discount: 0,
      sale_tax: 238400,
      total: 2622400
    },
    {
      order_id: 895,
      customer_id: 39,
      order_date: "2024-04-14T12:07:15.000Z",
      subtotal: 3308000,
      discount: 0,
      sale_tax: 330800,
      total: 3638800
    },
    {
      order_id: 673,
      customer_id: 38,
      order_date: "2024-10-28T01:57:10.000Z",
      subtotal: 760000,
      discount: 0,
      sale_tax: 76000,
      total: 836000
    },
    {
      order_id: 783,
      customer_id: 5,
      order_date: "2024-07-10T21:35:40.000Z",
      subtotal: 826000,
      discount: 0,
      sale_tax: 82600,
      total: 908600
    },
    {
      order_id: 484,
      customer_id: 6,
      order_date: "2024-02-22T20:47:32.000Z",
      subtotal: 1580000,
      discount: 0,
      sale_tax: 158000,
      total: 1738000
    },
    {
      order_id: 334,
      customer_id: 4,
      order_date: "2024-07-31T04:16:53.000Z",
      subtotal: 218000,
      discount: 0,
      sale_tax: 21800,
      total: 239800
    },
    {
      order_id: 558,
      customer_id: 17,
      order_date: "2024-10-10T12:03:28.000Z",
      subtotal: 1637000,
      discount: 0,
      sale_tax: 163700,
      total: 1800700
    },
    {
      order_id: 144,
      customer_id: 20,
      order_date: "2024-10-23T11:17:27.000Z",
      subtotal: 3426000,
      discount: 0,
      sale_tax: 342600,
      total: 3768600
    },
    {
      order_id: 540,
      customer_id: 36,
      order_date: "2024-09-07T19:52:53.000Z",
      subtotal: 1214000,
      discount: 0,
      sale_tax: 121400,
      total: 1335400
    },
    {
      order_id: 168,
      customer_id: 5,
      order_date: "2024-08-29T07:28:47.000Z",
      subtotal: 1569000,
      discount: 0,
      sale_tax: 156900,
      total: 1725900
    },
    {
      order_id: 598,
      customer_id: 18,
      order_date: "2024-01-27T20:16:16.000Z",
      subtotal: 1336000,
      discount: 0,
      sale_tax: 133600,
      total: 1469600
    },
    {
      order_id: 471,
      customer_id: 35,
      order_date: "2024-02-15T05:25:33.000Z",
      subtotal: 3019000,
      discount: 0,
      sale_tax: 301900,
      total: 3320900
    },
    {
      order_id: 287,
      customer_id: 33,
      order_date: "2024-12-27T19:41:35.000Z",
      subtotal: 1792000,
      discount: 0,
      sale_tax: 179200,
      total: 1971200
    },
    {
      order_id: 464,
      customer_id: 28,
      order_date: "2024-10-30T11:29:55.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 167,
      customer_id: 2,
      order_date: "2024-01-08T23:13:16.000Z",
      subtotal: 1008000,
      discount: 0,
      sale_tax: 100800,
      total: 1108800
    },
    {
      order_id: 277,
      customer_id: 36,
      order_date: "2024-12-15T22:04:28.000Z",
      subtotal: 747000,
      discount: 0,
      sale_tax: 74700,
      total: 821700
    },
    {
      order_id: 290,
      customer_id: 1,
      order_date: "2024-06-28T02:51:49.000Z",
      subtotal: 1663000,
      discount: 0,
      sale_tax: 166300,
      total: 1829300
    },
    {
      order_id: 300,
      customer_id: 28,
      order_date: "2024-08-28T12:21:33.000Z",
      subtotal: 276000,
      discount: 0,
      sale_tax: 27600,
      total: 303600
    },
    {
      order_id: 662,
      customer_id: 42,
      order_date: "2024-07-04T12:01:34.000Z",
      subtotal: 3989000,
      discount: 0,
      sale_tax: 398900,
      total: 4387900
    },
    {
      order_id: 284,
      customer_id: 17,
      order_date: "2024-12-29T04:28:55.000Z",
      subtotal: 2192000,
      discount: 0,
      sale_tax: 219200,
      total: 2411200
    },
    {
      order_id: 342,
      customer_id: 46,
      order_date: "2024-11-19T00:42:32.000Z",
      subtotal: 803000,
      discount: 0,
      sale_tax: 80300,
      total: 883300
    },
    {
      order_id: 367,
      customer_id: 34,
      order_date: "2024-05-15T11:54:13.000Z",
      subtotal: 2155000,
      discount: 0,
      sale_tax: 215500,
      total: 2370500
    },
    {
      order_id: 588,
      customer_id: 29,
      order_date: "2024-05-07T19:30:27.000Z",
      subtotal: 980000,
      discount: 0,
      sale_tax: 98000,
      total: 1078000
    },
    {
      order_id: 41,
      customer_id: 44,
      order_date: "2024-11-14T15:16:23.000Z",
      subtotal: 2592000,
      discount: 0,
      sale_tax: 259200,
      total: 2851200
    },
    {
      order_id: 439,
      customer_id: 36,
      order_date: "2024-10-14T03:33:15.000Z",
      subtotal: 3572000,
      discount: 0,
      sale_tax: 357200,
      total: 3929200
    },
    {
      order_id: 206,
      customer_id: 17,
      order_date: "2024-04-03T03:24:25.000Z",
      subtotal: 3374000,
      discount: 0,
      sale_tax: 337400,
      total: 3711400
    },
    {
      order_id: 46,
      customer_id: 2,
      order_date: "2024-02-29T18:55:23.000Z",
      subtotal: 1401000,
      discount: 0,
      sale_tax: 140100,
      total: 1541100
    },
    {
      order_id: 586,
      customer_id: 26,
      order_date: "2024-10-30T05:44:00.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 572,
      customer_id: 19,
      order_date: "2024-01-01T09:22:00.000Z",
      subtotal: 507000,
      discount: 0,
      sale_tax: 50700,
      total: 557700
    },
    {
      order_id: 53,
      customer_id: 16,
      order_date: "2024-07-18T09:49:52.000Z",
      subtotal: 3547000,
      discount: 0,
      sale_tax: 354700,
      total: 3901700
    },
    {
      order_id: 32,
      customer_id: 19,
      order_date: "2024-12-01T04:36:19.000Z",
      subtotal: 2570000,
      discount: 0,
      sale_tax: 257000,
      total: 2827000
    },
    {
      order_id: 336,
      customer_id: 49,
      order_date: "2024-12-03T11:31:30.000Z",
      subtotal: 1242000,
      discount: 0,
      sale_tax: 124200,
      total: 1366200
    },
    {
      order_id: 275,
      customer_id: 27,
      order_date: "2024-04-24T01:12:49.000Z",
      subtotal: 1978000,
      discount: 0,
      sale_tax: 197800,
      total: 2175800
    },
    {
      order_id: 247,
      customer_id: 43,
      order_date: "2024-01-04T00:24:10.000Z",
      subtotal: 2007000,
      discount: 0,
      sale_tax: 200700,
      total: 2207700
    },
    {
      order_id: 260,
      customer_id: 11,
      order_date: "2024-05-25T01:20:19.000Z",
      subtotal: 3023000,
      discount: 0,
      sale_tax: 302300,
      total: 3325300
    },
    {
      order_id: 423,
      customer_id: 49,
      order_date: "2024-06-29T19:14:54.000Z",
      subtotal: 3588000,
      discount: 0,
      sale_tax: 358800,
      total: 3946800
    },
    {
      order_id: 136,
      customer_id: 2,
      order_date: "2024-02-15T01:55:43.000Z",
      subtotal: 1266000,
      discount: 0,
      sale_tax: 126600,
      total: 1392600
    },
    {
      order_id: 139,
      customer_id: 41,
      order_date: "2024-07-30T06:44:33.000Z",
      subtotal: 1418000,
      discount: 0,
      sale_tax: 141800,
      total: 1559800
    },
    {
      order_id: 411,
      customer_id: 19,
      order_date: "2024-07-31T22:09:13.000Z",
      subtotal: 198000,
      discount: 0,
      sale_tax: 19800,
      total: 217800
    },
    {
      order_id: 869,
      customer_id: 11,
      order_date: "2024-06-07T04:38:12.000Z",
      subtotal: 378000,
      discount: 0,
      sale_tax: 37800,
      total: 415800
    },
    {
      order_id: 864,
      customer_id: 18,
      order_date: "2024-11-11T01:55:07.000Z",
      subtotal: 250000,
      discount: 0,
      sale_tax: 25000,
      total: 275000
    },
    {
      order_id: 425,
      customer_id: 14,
      order_date: "2024-11-04T06:41:47.000Z",
      subtotal: 1584000,
      discount: 0,
      sale_tax: 158400,
      total: 1742400
    },
    {
      order_id: 672,
      customer_id: 35,
      order_date: "2024-02-03T22:15:55.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 825,
      customer_id: 15,
      order_date: "2024-06-28T11:09:17.000Z",
      subtotal: 3565000,
      discount: 0,
      sale_tax: 356500,
      total: 3921500
    },
    {
      order_id: 316,
      customer_id: 41,
      order_date: "2024-04-12T01:51:08.000Z",
      subtotal: 1657000,
      discount: 0,
      sale_tax: 165700,
      total: 1822700
    },
    {
      order_id: 731,
      customer_id: 18,
      order_date: "2024-11-20T10:05:47.000Z",
      subtotal: 2588000,
      discount: 0,
      sale_tax: 258800,
      total: 2846800
    },
    {
      order_id: 403,
      customer_id: 17,
      order_date: "2024-03-01T05:27:30.000Z",
      subtotal: 3272000,
      discount: 0,
      sale_tax: 327200,
      total: 3599200
    },
    {
      order_id: 256,
      customer_id: 21,
      order_date: "2024-07-31T15:42:12.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 654,
      customer_id: 49,
      order_date: "2024-07-04T18:44:06.000Z",
      subtotal: 1186000,
      discount: 0,
      sale_tax: 118600,
      total: 1304600
    },
    {
      order_id: 332,
      customer_id: 46,
      order_date: "2024-03-13T20:13:24.000Z",
      subtotal: 2844000,
      discount: 0,
      sale_tax: 284400,
      total: 3128400
    },
    {
      order_id: 628,
      customer_id: 34,
      order_date: "2024-09-26T21:31:39.000Z",
      subtotal: 2126000,
      discount: 0,
      sale_tax: 212600,
      total: 2338600
    },
    {
      order_id: 33,
      customer_id: 34,
      order_date: "2024-12-10T01:34:26.000Z",
      subtotal: 3073000,
      discount: 0,
      sale_tax: 307300,
      total: 3380300
    },
    {
      order_id: 885,
      customer_id: 40,
      order_date: "2024-08-17T02:57:02.000Z",
      subtotal: 636000,
      discount: 0,
      sale_tax: 63600,
      total: 699600
    },
    {
      order_id: 422,
      customer_id: 15,
      order_date: "2024-07-23T03:55:13.000Z",
      subtotal: 2329000,
      discount: 0,
      sale_tax: 232900,
      total: 2561900
    },
    {
      order_id: 549,
      customer_id: 49,
      order_date: "2024-06-23T07:44:52.000Z",
      subtotal: 4242000,
      discount: 0,
      sale_tax: 424200,
      total: 4666200
    },
    {
      order_id: 185,
      customer_id: 11,
      order_date: "2024-11-30T14:19:55.000Z",
      subtotal: 2072000,
      discount: 0,
      sale_tax: 207200,
      total: 2279200
    },
    {
      order_id: 653,
      customer_id: 3,
      order_date: "2024-10-19T01:20:46.000Z",
      subtotal: 706000,
      discount: 0,
      sale_tax: 70600,
      total: 776600
    },
    {
      order_id: 380,
      customer_id: 33,
      order_date: "2024-06-11T17:30:20.000Z",
      subtotal: 3747000,
      discount: 0,
      sale_tax: 374700,
      total: 4121700
    },
    {
      order_id: 215,
      customer_id: 45,
      order_date: "2024-11-23T23:36:49.000Z",
      subtotal: 349000,
      discount: 0,
      sale_tax: 34900,
      total: 383900
    },
    {
      order_id: 130,
      customer_id: 46,
      order_date: "2024-03-12T00:19:40.000Z",
      subtotal: 1244000,
      discount: 0,
      sale_tax: 124400,
      total: 1368400
    },
    {
      order_id: 23,
      customer_id: 3,
      order_date: "2024-10-01T12:45:25.000Z",
      subtotal: 3390000,
      discount: 0,
      sale_tax: 339000,
      total: 3729000
    },
    {
      order_id: 612,
      customer_id: 9,
      order_date: "2024-11-26T14:14:33.000Z",
      subtotal: 1636000,
      discount: 0,
      sale_tax: 163600,
      total: 1799600
    },
    {
      order_id: 486,
      customer_id: 28,
      order_date: "2024-09-28T10:21:23.000Z",
      subtotal: 3888000,
      discount: 0,
      sale_tax: 388800,
      total: 4276800
    },
    {
      order_id: 625,
      customer_id: 4,
      order_date: "2024-01-21T20:31:13.000Z",
      subtotal: 1700000,
      discount: 0,
      sale_tax: 170000,
      total: 1870000
    },
    {
      order_id: 617,
      customer_id: 1,
      order_date: "2024-02-08T04:09:06.000Z",
      subtotal: 1936000,
      discount: 0,
      sale_tax: 193600,
      total: 2129600
    },
    {
      order_id: 765,
      customer_id: 34,
      order_date: "2024-06-14T12:48:52.000Z",
      subtotal: 1314000,
      discount: 0,
      sale_tax: 131400,
      total: 1445400
    },
    {
      order_id: 552,
      customer_id: 15,
      order_date: "2024-02-12T08:18:33.000Z",
      subtotal: 1829000,
      discount: 0,
      sale_tax: 182900,
      total: 2011900
    },
    {
      order_id: 887,
      customer_id: 24,
      order_date: "2024-03-17T02:14:02.000Z",
      subtotal: 620000,
      discount: 0,
      sale_tax: 62000,
      total: 682000
    },
    {
      order_id: 959,
      customer_id: 22,
      order_date: "2024-08-12T01:54:02.000Z",
      subtotal: 972000,
      discount: 0,
      sale_tax: 97200,
      total: 1069200
    },
    {
      order_id: 819,
      customer_id: 5,
      order_date: "2024-04-27T14:20:06.000Z",
      subtotal: 1576000,
      discount: 0,
      sale_tax: 157600,
      total: 1733600
    },
    {
      order_id: 314,
      customer_id: 7,
      order_date: "2024-08-16T07:53:43.000Z",
      subtotal: 3456000,
      discount: 0,
      sale_tax: 345600,
      total: 3801600
    },
    {
      order_id: 817,
      customer_id: 8,
      order_date: "2024-11-02T15:14:14.000Z",
      subtotal: 3022000,
      discount: 0,
      sale_tax: 302200,
      total: 3324200
    },
    {
      order_id: 386,
      customer_id: 15,
      order_date: "2024-05-19T04:30:04.000Z",
      subtotal: 237000,
      discount: 0,
      sale_tax: 23700,
      total: 260700
    },
    {
      order_id: 426,
      customer_id: 24,
      order_date: "2024-12-19T22:48:14.000Z",
      subtotal: 3471000,
      discount: 0,
      sale_tax: 347100,
      total: 3818100
    },
    {
      order_id: 433,
      customer_id: 16,
      order_date: "2024-04-25T07:41:38.000Z",
      subtotal: 3739000,
      discount: 0,
      sale_tax: 373900,
      total: 4112900
    },
    {
      order_id: 364,
      customer_id: 37,
      order_date: "2024-09-27T03:15:21.000Z",
      subtotal: 1816000,
      discount: 0,
      sale_tax: 181600,
      total: 1997600
    },
    {
      order_id: 877,
      customer_id: 6,
      order_date: "2024-10-21T04:37:41.000Z",
      subtotal: 564000,
      discount: 0,
      sale_tax: 56400,
      total: 620400
    },
    {
      order_id: 299,
      customer_id: 19,
      order_date: "2024-09-28T15:44:24.000Z",
      subtotal: 2181000,
      discount: 0,
      sale_tax: 218100,
      total: 2399100
    },
    {
      order_id: 169,
      customer_id: 4,
      order_date: "2024-11-18T04:46:38.000Z",
      subtotal: 537000,
      discount: 0,
      sale_tax: 53700,
      total: 590700
    },
    {
      order_id: 605,
      customer_id: 34,
      order_date: "2024-05-15T13:51:49.000Z",
      subtotal: 4037000,
      discount: 0,
      sale_tax: 403700,
      total: 4440700
    },
    {
      order_id: 345,
      customer_id: 47,
      order_date: "2024-01-26T11:26:02.000Z",
      subtotal: 990000,
      discount: 0,
      sale_tax: 99000,
      total: 1089000
    },
    {
      order_id: 92,
      customer_id: 26,
      order_date: "2024-04-08T23:46:28.000Z",
      subtotal: 2106000,
      discount: 0,
      sale_tax: 210600,
      total: 2316600
    },
    {
      order_id: 541,
      customer_id: 1,
      order_date: "2024-03-23T15:35:49.000Z",
      subtotal: 2490000,
      discount: 0,
      sale_tax: 249000,
      total: 2739000
    },
    {
      order_id: 971,
      customer_id: 34,
      order_date: "2024-08-18T11:02:30.000Z",
      subtotal: 3306000,
      discount: 0,
      sale_tax: 330600,
      total: 3636600
    },
    {
      order_id: 660,
      customer_id: 8,
      order_date: "2024-08-06T13:40:38.000Z",
      subtotal: 2927000,
      discount: 0,
      sale_tax: 292700,
      total: 3219700
    },
    {
      order_id: 910,
      customer_id: 18,
      order_date: "2024-10-13T18:32:02.000Z",
      subtotal: 441000,
      discount: 0,
      sale_tax: 44100,
      total: 485100
    },
    {
      order_id: 437,
      customer_id: 48,
      order_date: "2024-02-05T01:43:45.000Z",
      subtotal: 256000,
      discount: 0,
      sale_tax: 25600,
      total: 281600
    },
    {
      order_id: 236,
      customer_id: 11,
      order_date: "2024-04-18T06:06:52.000Z",
      subtotal: 1837000,
      discount: 0,
      sale_tax: 183700,
      total: 2020700
    },
    {
      order_id: 941,
      customer_id: 10,
      order_date: "2024-04-28T13:36:41.000Z",
      subtotal: 1019000,
      discount: 0,
      sale_tax: 101900,
      total: 1120900
    },
    {
      order_id: 957,
      customer_id: 41,
      order_date: "2024-11-10T19:31:31.000Z",
      subtotal: 672000,
      discount: 0,
      sale_tax: 67200,
      total: 739200
    },
    {
      order_id: 998,
      customer_id: 45,
      order_date: "2024-03-10T18:22:24.000Z",
      subtotal: 2879000,
      discount: 0,
      sale_tax: 287900,
      total: 3166900
    },
    {
      order_id: 949,
      customer_id: 23,
      order_date: "2024-05-02T13:33:10.000Z",
      subtotal: 635000,
      discount: 0,
      sale_tax: 63500,
      total: 698500
    },
    {
      order_id: 197,
      customer_id: 48,
      order_date: "2024-08-28T14:29:56.000Z",
      subtotal: 1544000,
      discount: 0,
      sale_tax: 154400,
      total: 1698400
    },
    {
      order_id: 135,
      customer_id: 5,
      order_date: "2024-08-29T15:35:18.000Z",
      subtotal: 918000,
      discount: 0,
      sale_tax: 91800,
      total: 1009800
    },
    {
      order_id: 999,
      customer_id: 40,
      order_date: "2024-04-10T03:00:42.000Z",
      subtotal: 375000,
      discount: 0,
      sale_tax: 37500,
      total: 412500
    },
    {
      order_id: 493,
      customer_id: 11,
      order_date: "2024-01-31T21:05:23.000Z",
      subtotal: 2220000,
      discount: 0,
      sale_tax: 222000,
      total: 2442000
    },
    {
      order_id: 707,
      customer_id: 24,
      order_date: "2024-12-18T09:41:56.000Z",
      subtotal: 729000,
      discount: 0,
      sale_tax: 72900,
      total: 801900
    },
    {
      order_id: 665,
      customer_id: 3,
      order_date: "2024-08-06T18:11:12.000Z",
      subtotal: 3594000,
      discount: 0,
      sale_tax: 359400,
      total: 3953400
    },
    {
      order_id: 454,
      customer_id: 23,
      order_date: "2024-07-14T15:30:19.000Z",
      subtotal: 1569000,
      discount: 0,
      sale_tax: 156900,
      total: 1725900
    },
    {
      order_id: 759,
      customer_id: 27,
      order_date: "2024-05-03T08:45:42.000Z",
      subtotal: 2133000,
      discount: 0,
      sale_tax: 213300,
      total: 2346300
    },
    {
      order_id: 879,
      customer_id: 14,
      order_date: "2024-09-28T03:28:58.000Z",
      subtotal: 3473000,
      discount: 0,
      sale_tax: 347300,
      total: 3820300
    },
    {
      order_id: 482,
      customer_id: 47,
      order_date: "2024-10-30T06:29:57.000Z",
      subtotal: 1692000,
      discount: 0,
      sale_tax: 169200,
      total: 1861200
    },
    {
      order_id: 227,
      customer_id: 48,
      order_date: "2024-11-30T18:48:46.000Z",
      subtotal: 1284000,
      discount: 0,
      sale_tax: 128400,
      total: 1412400
    },
    {
      order_id: 315,
      customer_id: 40,
      order_date: "2024-02-07T02:45:55.000Z",
      subtotal: 239000,
      discount: 0,
      sale_tax: 23900,
      total: 262900
    },
    {
      order_id: 366,
      customer_id: 6,
      order_date: "2024-06-10T21:26:13.000Z",
      subtotal: 149000,
      discount: 0,
      sale_tax: 14900,
      total: 163900
    },
    {
      order_id: 307,
      customer_id: 29,
      order_date: "2024-07-26T09:55:14.000Z",
      subtotal: 1699000,
      discount: 0,
      sale_tax: 169900,
      total: 1868900
    },
    {
      order_id: 841,
      customer_id: 34,
      order_date: "2024-01-10T04:44:40.000Z",
      subtotal: 1497000,
      discount: 0,
      sale_tax: 149700,
      total: 1646700
    },
    {
      order_id: 91,
      customer_id: 49,
      order_date: "2024-02-24T03:23:21.000Z",
      subtotal: 537000,
      discount: 0,
      sale_tax: 53700,
      total: 590700
    },
    {
      order_id: 500,
      customer_id: 38,
      order_date: "2024-01-09T03:25:03.000Z",
      subtotal: 1796000,
      discount: 0,
      sale_tax: 179600,
      total: 1975600
    },
    {
      order_id: 311,
      customer_id: 28,
      order_date: "2024-06-01T06:32:36.000Z",
      subtotal: 768000,
      discount: 0,
      sale_tax: 76800,
      total: 844800
    },
    {
      order_id: 73,
      customer_id: 28,
      order_date: "2024-05-20T07:11:45.000Z",
      subtotal: 276000,
      discount: 0,
      sale_tax: 27600,
      total: 303600
    },
    {
      order_id: 103,
      customer_id: 9,
      order_date: "2024-02-27T21:48:11.000Z",
      subtotal: 3385000,
      discount: 0,
      sale_tax: 338500,
      total: 3723500
    },
    {
      order_id: 875,
      customer_id: 35,
      order_date: "2024-04-29T20:11:53.000Z",
      subtotal: 4488000,
      discount: 0,
      sale_tax: 448800,
      total: 4936800
    },
    {
      order_id: 239,
      customer_id: 2,
      order_date: "2024-10-22T06:07:57.000Z",
      subtotal: 698000,
      discount: 0,
      sale_tax: 69800,
      total: 767800
    },
    {
      order_id: 121,
      customer_id: 5,
      order_date: "2024-02-21T01:18:50.000Z",
      subtotal: 1945000,
      discount: 0,
      sale_tax: 194500,
      total: 2139500
    },
    {
      order_id: 420,
      customer_id: 48,
      order_date: "2024-05-31T02:48:08.000Z",
      subtotal: 1643000,
      discount: 0,
      sale_tax: 164300,
      total: 1807300
    },
    {
      order_id: 561,
      customer_id: 44,
      order_date: "2024-05-04T06:53:23.000Z",
      subtotal: 1176000,
      discount: 0,
      sale_tax: 117600,
      total: 1293600
    },
    {
      order_id: 845,
      customer_id: 13,
      order_date: "2024-08-28T21:02:36.000Z",
      subtotal: 2832000,
      discount: 0,
      sale_tax: 283200,
      total: 3115200
    },
    {
      order_id: 755,
      customer_id: 6,
      order_date: "2024-04-01T05:29:31.000Z",
      subtotal: 2060000,
      discount: 0,
      sale_tax: 206000,
      total: 2266000
    },
    {
      order_id: 196,
      customer_id: 33,
      order_date: "2024-05-28T09:38:19.000Z",
      subtotal: 1164000,
      discount: 0,
      sale_tax: 116400,
      total: 1280400
    },
    {
      order_id: 291,
      customer_id: 37,
      order_date: "2024-06-08T15:25:13.000Z",
      subtotal: 1098000,
      discount: 0,
      sale_tax: 109800,
      total: 1207800
    },
    {
      order_id: 15,
      customer_id: 31,
      order_date: "2024-08-27T11:33:43.000Z",
      subtotal: 2814000,
      discount: 0,
      sale_tax: 281400,
      total: 3095400
    },
    {
      order_id: 859,
      customer_id: 30,
      order_date: "2024-09-28T09:52:36.000Z",
      subtotal: 2472000,
      discount: 0,
      sale_tax: 247200,
      total: 2719200
    },
    {
      order_id: 842,
      customer_id: 28,
      order_date: "2024-01-05T21:26:32.000Z",
      subtotal: 740000,
      discount: 0,
      sale_tax: 74000,
      total: 814000
    },
    {
      order_id: 767,
      customer_id: 15,
      order_date: "2024-06-23T01:43:44.000Z",
      subtotal: 2621000,
      discount: 0,
      sale_tax: 262100,
      total: 2883100
    },
    {
      order_id: 61,
      customer_id: 29,
      order_date: "2024-10-07T18:31:46.000Z",
      subtotal: 1125000,
      discount: 0,
      sale_tax: 112500,
      total: 1237500
    },
    {
      order_id: 244,
      customer_id: 46,
      order_date: "2024-07-08T04:34:16.000Z",
      subtotal: 2916000,
      discount: 0,
      sale_tax: 291600,
      total: 3207600
    },
    {
      order_id: 602,
      customer_id: 33,
      order_date: "2024-05-13T15:29:33.000Z",
      subtotal: 324000,
      discount: 0,
      sale_tax: 32400,
      total: 356400
    },
    {
      order_id: 691,
      customer_id: 36,
      order_date: "2024-01-17T13:01:16.000Z",
      subtotal: 495000,
      discount: 0,
      sale_tax: 49500,
      total: 544500
    },
    {
      order_id: 468,
      customer_id: 32,
      order_date: "2024-04-15T18:28:32.000Z",
      subtotal: 1783000,
      discount: 0,
      sale_tax: 178300,
      total: 1961300
    },
    {
      order_id: 697,
      customer_id: 33,
      order_date: "2024-08-14T15:13:39.000Z",
      subtotal: 169000,
      discount: 0,
      sale_tax: 16900,
      total: 185900
    },
    {
      order_id: 721,
      customer_id: 28,
      order_date: "2024-11-09T15:00:32.000Z",
      subtotal: 1942000,
      discount: 0,
      sale_tax: 194200,
      total: 2136200
    },
    {
      order_id: 251,
      customer_id: 33,
      order_date: "2024-11-09T08:58:37.000Z",
      subtotal: 2498000,
      discount: 0,
      sale_tax: 249800,
      total: 2747800
    },
    {
      order_id: 705,
      customer_id: 15,
      order_date: "2024-11-07T13:33:40.000Z",
      subtotal: 1873000,
      discount: 0,
      sale_tax: 187300,
      total: 2060300
    },
    {
      order_id: 104,
      customer_id: 2,
      order_date: "2024-12-24T04:39:16.000Z",
      subtotal: 2524000,
      discount: 0,
      sale_tax: 252400,
      total: 2776400
    },
    {
      order_id: 960,
      customer_id: 25,
      order_date: "2024-09-18T06:50:45.000Z",
      subtotal: 3065000,
      discount: 0,
      sale_tax: 306500,
      total: 3371500
    },
    {
      order_id: 171,
      customer_id: 44,
      order_date: "2024-03-08T02:19:32.000Z",
      subtotal: 969000,
      discount: 0,
      sale_tax: 96900,
      total: 1065900
    },
    {
      order_id: 397,
      customer_id: 29,
      order_date: "2024-07-28T19:50:21.000Z",
      subtotal: 1497000,
      discount: 0,
      sale_tax: 149700,
      total: 1646700
    },
    {
      order_id: 604,
      customer_id: 17,
      order_date: "2024-02-15T04:40:06.000Z",
      subtotal: 1824000,
      discount: 0,
      sale_tax: 182400,
      total: 2006400
    },
    {
      order_id: 427,
      customer_id: 29,
      order_date: "2024-09-10T00:20:55.000Z",
      subtotal: 651000,
      discount: 0,
      sale_tax: 65100,
      total: 716100
    },
    {
      order_id: 786,
      customer_id: 12,
      order_date: "2024-01-25T15:04:46.000Z",
      subtotal: 2039000,
      discount: 0,
      sale_tax: 203900,
      total: 2242900
    },
    {
      order_id: 347,
      customer_id: 20,
      order_date: "2024-11-23T22:20:55.000Z",
      subtotal: 645000,
      discount: 0,
      sale_tax: 64500,
      total: 709500
    },
    {
      order_id: 179,
      customer_id: 40,
      order_date: "2024-05-23T11:51:11.000Z",
      subtotal: 3909000,
      discount: 0,
      sale_tax: 390900,
      total: 4299900
    },
    {
      order_id: 562,
      customer_id: 7,
      order_date: "2024-10-20T13:35:34.000Z",
      subtotal: 4065000,
      discount: 0,
      sale_tax: 406500,
      total: 4471500
    },
    {
      order_id: 636,
      customer_id: 9,
      order_date: "2024-08-30T05:08:05.000Z",
      subtotal: 3317000,
      discount: 0,
      sale_tax: 331700,
      total: 3648700
    },
    {
      order_id: 321,
      customer_id: 20,
      order_date: "2024-07-10T14:53:18.000Z",
      subtotal: 1604000,
      discount: 0,
      sale_tax: 160400,
      total: 1764400
    },
    {
      order_id: 105,
      customer_id: 31,
      order_date: "2024-10-25T08:52:13.000Z",
      subtotal: 627000,
      discount: 0,
      sale_tax: 62700,
      total: 689700
    },
    {
      order_id: 402,
      customer_id: 38,
      order_date: "2024-05-14T08:53:27.000Z",
      subtotal: 2415000,
      discount: 0,
      sale_tax: 241500,
      total: 2656500
    },
    {
      order_id: 804,
      customer_id: 11,
      order_date: "2024-08-21T10:43:27.000Z",
      subtotal: 4074000,
      discount: 0,
      sale_tax: 407400,
      total: 4481400
    },
    {
      order_id: 445,
      customer_id: 13,
      order_date: "2024-01-07T23:19:29.000Z",
      subtotal: 3886000,
      discount: 0,
      sale_tax: 388600,
      total: 4274600
    },
    {
      order_id: 866,
      customer_id: 7,
      order_date: "2024-07-03T07:53:38.000Z",
      subtotal: 3622000,
      discount: 0,
      sale_tax: 362200,
      total: 3984200
    },
    {
      order_id: 889,
      customer_id: 26,
      order_date: "2024-03-23T12:46:58.000Z",
      subtotal: 2125000,
      discount: 0,
      sale_tax: 212500,
      total: 2337500
    },
    {
      order_id: 991,
      customer_id: 36,
      order_date: "2024-07-22T02:19:43.000Z",
      subtotal: 507000,
      discount: 0,
      sale_tax: 50700,
      total: 557700
    },
    {
      order_id: 776,
      customer_id: 43,
      order_date: "2024-08-30T07:44:58.000Z",
      subtotal: 717000,
      discount: 0,
      sale_tax: 71700,
      total: 788700
    },
    {
      order_id: 467,
      customer_id: 41,
      order_date: "2024-05-09T03:21:35.000Z",
      subtotal: 2422000,
      discount: 0,
      sale_tax: 242200,
      total: 2664200
    },
    {
      order_id: 327,
      customer_id: 44,
      order_date: "2024-10-11T00:11:44.000Z",
      subtotal: 1644000,
      discount: 0,
      sale_tax: 164400,
      total: 1808400
    },
    {
      order_id: 253,
      customer_id: 9,
      order_date: "2024-12-13T22:05:49.000Z",
      subtotal: 1622000,
      discount: 0,
      sale_tax: 162200,
      total: 1784200
    },
    {
      order_id: 692,
      customer_id: 37,
      order_date: "2024-12-15T05:57:40.000Z",
      subtotal: 507000,
      discount: 0,
      sale_tax: 50700,
      total: 557700
    },
    {
      order_id: 581,
      customer_id: 30,
      order_date: "2024-03-16T11:33:51.000Z",
      subtotal: 1143000,
      discount: 0,
      sale_tax: 114300,
      total: 1257300
    },
    {
      order_id: 14,
      customer_id: 3,
      order_date: "2024-03-26T17:16:41.000Z",
      subtotal: 2389000,
      discount: 0,
      sale_tax: 238900,
      total: 2627900
    },
    {
      order_id: 109,
      customer_id: 21,
      order_date: "2024-11-01T22:40:10.000Z",
      subtotal: 856000,
      discount: 0,
      sale_tax: 85600,
      total: 941600
    },
    {
      order_id: 133,
      customer_id: 27,
      order_date: "2024-09-23T03:07:36.000Z",
      subtotal: 889000,
      discount: 0,
      sale_tax: 88900,
      total: 977900
    },
    {
      order_id: 724,
      customer_id: 28,
      order_date: "2024-01-16T20:56:41.000Z",
      subtotal: 2119000,
      discount: 0,
      sale_tax: 211900,
      total: 2330900
    },
    {
      order_id: 372,
      customer_id: 8,
      order_date: "2024-12-25T10:19:34.000Z",
      subtotal: 358000,
      discount: 0,
      sale_tax: 35800,
      total: 393800
    },
    {
      order_id: 339,
      customer_id: 43,
      order_date: "2024-01-13T05:47:25.000Z",
      subtotal: 1950000,
      discount: 0,
      sale_tax: 195000,
      total: 2145000
    },
    {
      order_id: 600,
      customer_id: 48,
      order_date: "2024-07-04T01:13:56.000Z",
      subtotal: 1307000,
      discount: 0,
      sale_tax: 130700,
      total: 1437700
    },
    {
      order_id: 772,
      customer_id: 38,
      order_date: "2024-02-28T14:34:47.000Z",
      subtotal: 904000,
      discount: 0,
      sale_tax: 90400,
      total: 994400
    },
    {
      order_id: 335,
      customer_id: 34,
      order_date: "2024-07-27T02:19:05.000Z",
      subtotal: 2815000,
      discount: 0,
      sale_tax: 281500,
      total: 3096500
    },
    {
      order_id: 603,
      customer_id: 44,
      order_date: "2024-12-25T17:23:47.000Z",
      subtotal: 1900000,
      discount: 0,
      sale_tax: 190000,
      total: 2090000
    },
    {
      order_id: 591,
      customer_id: 34,
      order_date: "2024-05-23T22:25:41.000Z",
      subtotal: 2689000,
      discount: 0,
      sale_tax: 268900,
      total: 2957900
    },
    {
      order_id: 808,
      customer_id: 44,
      order_date: "2024-02-21T09:34:47.000Z",
      subtotal: 4908000,
      discount: 0,
      sale_tax: 490800,
      total: 5398800
    },
    {
      order_id: 383,
      customer_id: 18,
      order_date: "2024-10-10T07:12:17.000Z",
      subtotal: 2546000,
      discount: 0,
      sale_tax: 254600,
      total: 2800600
    },
    {
      order_id: 301,
      customer_id: 37,
      order_date: "2024-02-28T22:20:20.000Z",
      subtotal: 966000,
      discount: 0,
      sale_tax: 96600,
      total: 1062600
    },
    {
      order_id: 7,
      customer_id: 14,
      order_date: "2024-09-20T02:10:13.000Z",
      subtotal: 2064000,
      discount: 0,
      sale_tax: 206400,
      total: 2270400
    },
    {
      order_id: 757,
      customer_id: 3,
      order_date: "2024-05-25T09:51:55.000Z",
      subtotal: 3626000,
      discount: 0,
      sale_tax: 362600,
      total: 3988600
    },
    {
      order_id: 771,
      customer_id: 1,
      order_date: "2024-04-23T13:32:42.000Z",
      subtotal: 2723000,
      discount: 0,
      sale_tax: 272300,
      total: 2995300
    },
    {
      order_id: 827,
      customer_id: 13,
      order_date: "2024-08-10T15:45:44.000Z",
      subtotal: 1436000,
      discount: 0,
      sale_tax: 143600,
      total: 1579600
    },
    {
      order_id: 254,
      customer_id: 19,
      order_date: "2024-03-16T11:12:45.000Z",
      subtotal: 2170000,
      discount: 0,
      sale_tax: 217000,
      total: 2387000
    },
    {
      order_id: 377,
      customer_id: 14,
      order_date: "2024-02-06T18:23:33.000Z",
      subtotal: 239000,
      discount: 0,
      sale_tax: 23900,
      total: 262900
    },
    {
      order_id: 952,
      customer_id: 8,
      order_date: "2024-11-19T19:24:43.000Z",
      subtotal: 5558000,
      discount: 0,
      sale_tax: 555800,
      total: 6113800
    },
    {
      order_id: 159,
      customer_id: 31,
      order_date: "2024-12-30T10:00:04.000Z",
      subtotal: 505000,
      discount: 0,
      sale_tax: 50500,
      total: 555500
    },
    {
      order_id: 432,
      customer_id: 48,
      order_date: "2024-12-18T07:42:28.000Z",
      subtotal: 2187000,
      discount: 0,
      sale_tax: 218700,
      total: 2405700
    },
    {
      order_id: 986,
      customer_id: 42,
      order_date: "2024-04-24T14:39:11.000Z",
      subtotal: 3723000,
      discount: 0,
      sale_tax: 372300,
      total: 4095300
    },
    {
      order_id: 857,
      customer_id: 13,
      order_date: "2024-03-07T20:02:00.000Z",
      subtotal: 1911000,
      discount: 0,
      sale_tax: 191100,
      total: 2102100
    },
    {
      order_id: 619,
      customer_id: 41,
      order_date: "2024-03-14T03:47:49.000Z",
      subtotal: 1828000,
      discount: 0,
      sale_tax: 182800,
      total: 2010800
    },
    {
      order_id: 890,
      customer_id: 5,
      order_date: "2024-04-02T03:51:03.000Z",
      subtotal: 384000,
      discount: 0,
      sale_tax: 38400,
      total: 422400
    },
    {
      order_id: 20,
      customer_id: 6,
      order_date: "2024-03-22T12:39:31.000Z",
      subtotal: 592000,
      discount: 0,
      sale_tax: 59200,
      total: 651200
    },
    {
      order_id: 319,
      customer_id: 4,
      order_date: "2024-11-28T10:15:31.000Z",
      subtotal: 3024000,
      discount: 0,
      sale_tax: 302400,
      total: 3326400
    },
    {
      order_id: 1,
      customer_id: 5,
      order_date: "2024-01-08T15:25:58.000Z",
      subtotal: 2789000,
      discount: 0,
      sale_tax: 278900,
      total: 3067900
    },
    {
      order_id: 76,
      customer_id: 35,
      order_date: "2024-12-07T21:28:04.000Z",
      subtotal: 3730000,
      discount: 0,
      sale_tax: 373000,
      total: 4103000
    },
    {
      order_id: 517,
      customer_id: 5,
      order_date: "2024-09-30T02:18:19.000Z",
      subtotal: 2490000,
      discount: 0,
      sale_tax: 249000,
      total: 2739000
    },
    {
      order_id: 129,
      customer_id: 13,
      order_date: "2024-03-16T17:03:09.000Z",
      subtotal: 2018000,
      discount: 0,
      sale_tax: 201800,
      total: 2219800
    },
    {
      order_id: 203,
      customer_id: 17,
      order_date: "2024-10-31T10:07:55.000Z",
      subtotal: 979000,
      discount: 0,
      sale_tax: 97900,
      total: 1076900
    },
    {
      order_id: 789,
      customer_id: 8,
      order_date: "2024-06-22T22:09:53.000Z",
      subtotal: 2852000,
      discount: 0,
      sale_tax: 285200,
      total: 3137200
    },
    {
      order_id: 346,
      customer_id: 32,
      order_date: "2024-01-07T06:53:49.000Z",
      subtotal: 918000,
      discount: 0,
      sale_tax: 91800,
      total: 1009800
    },
    {
      order_id: 71,
      customer_id: 33,
      order_date: "2024-01-31T20:31:14.000Z",
      subtotal: 147000,
      discount: 0,
      sale_tax: 14700,
      total: 161700
    },
    {
      order_id: 267,
      customer_id: 2,
      order_date: "2024-03-19T07:22:53.000Z",
      subtotal: 2767000,
      discount: 0,
      sale_tax: 276700,
      total: 3043700
    },
    {
      order_id: 68,
      customer_id: 31,
      order_date: "2024-03-02T00:32:03.000Z",
      subtotal: 632000,
      discount: 0,
      sale_tax: 63200,
      total: 695200
    },
    {
      order_id: 773,
      customer_id: 41,
      order_date: "2024-05-06T02:57:21.000Z",
      subtotal: 1716000,
      discount: 0,
      sale_tax: 171600,
      total: 1887600
    },
    {
      order_id: 146,
      customer_id: 26,
      order_date: "2024-01-23T22:01:46.000Z",
      subtotal: 1820000,
      discount: 0,
      sale_tax: 182000,
      total: 2002000
    },
    {
      order_id: 80,
      customer_id: 16,
      order_date: "2024-12-26T05:09:30.000Z",
      subtotal: 2243000,
      discount: 0,
      sale_tax: 224300,
      total: 2467300
    },
    {
      order_id: 861,
      customer_id: 9,
      order_date: "2024-10-21T05:37:49.000Z",
      subtotal: 2478000,
      discount: 0,
      sale_tax: 247800,
      total: 2725800
    },
    {
      order_id: 511,
      customer_id: 29,
      order_date: "2024-09-16T00:45:43.000Z",
      subtotal: 2193000,
      discount: 0,
      sale_tax: 219300,
      total: 2412300
    },
    {
      order_id: 162,
      customer_id: 14,
      order_date: "2024-04-06T09:26:28.000Z",
      subtotal: 1283000,
      discount: 0,
      sale_tax: 128300,
      total: 1411300
    },
    {
      order_id: 738,
      customer_id: 1,
      order_date: "2024-12-07T01:48:28.000Z",
      subtotal: 737000,
      discount: 0,
      sale_tax: 73700,
      total: 810700
    },
    {
      order_id: 797,
      customer_id: 37,
      order_date: "2024-12-26T21:14:02.000Z",
      subtotal: 2203000,
      discount: 0,
      sale_tax: 220300,
      total: 2423300
    },
    {
      order_id: 582,
      customer_id: 4,
      order_date: "2024-06-21T17:01:13.000Z",
      subtotal: 338000,
      discount: 0,
      sale_tax: 33800,
      total: 371800
    },
    {
      order_id: 943,
      customer_id: 5,
      order_date: "2024-01-22T23:50:25.000Z",
      subtotal: 99000,
      discount: 0,
      sale_tax: 9900,
      total: 108900
    },
    {
      order_id: 330,
      customer_id: 8,
      order_date: "2024-03-26T09:16:39.000Z",
      subtotal: 843000,
      discount: 0,
      sale_tax: 84300,
      total: 927300
    },
    {
      order_id: 751,
      customer_id: 32,
      order_date: "2024-08-31T09:02:02.000Z",
      subtotal: 1253000,
      discount: 0,
      sale_tax: 125300,
      total: 1378300
    },
    {
      order_id: 237,
      customer_id: 29,
      order_date: "2024-04-18T20:49:52.000Z",
      subtotal: 2282000,
      discount: 0,
      sale_tax: 228200,
      total: 2510200
    },
    {
      order_id: 451,
      customer_id: 39,
      order_date: "2024-11-25T17:29:47.000Z",
      subtotal: 1578000,
      discount: 0,
      sale_tax: 157800,
      total: 1735800
    },
    {
      order_id: 262,
      customer_id: 46,
      order_date: "2024-01-05T12:51:12.000Z",
      subtotal: 1280000,
      discount: 0,
      sale_tax: 128000,
      total: 1408000
    },
    {
      order_id: 610,
      customer_id: 42,
      order_date: "2024-10-16T10:21:51.000Z",
      subtotal: 276000,
      discount: 0,
      sale_tax: 27600,
      total: 303600
    },
    {
      order_id: 79,
      customer_id: 47,
      order_date: "2024-06-06T20:56:29.000Z",
      subtotal: 798000,
      discount: 0,
      sale_tax: 79800,
      total: 877800
    },
    {
      order_id: 678,
      customer_id: 46,
      order_date: "2024-09-12T13:27:31.000Z",
      subtotal: 3409000,
      discount: 0,
      sale_tax: 340900,
      total: 3749900
    },
    {
      order_id: 812,
      customer_id: 7,
      order_date: "2024-10-19T11:45:14.000Z",
      subtotal: 822000,
      discount: 0,
      sale_tax: 82200,
      total: 904200
    },
    {
      order_id: 579,
      customer_id: 10,
      order_date: "2024-02-21T13:58:57.000Z",
      subtotal: 1937000,
      discount: 0,
      sale_tax: 193700,
      total: 2130700
    },
    {
      order_id: 510,
      customer_id: 5,
      order_date: "2024-07-13T11:29:26.000Z",
      subtotal: 2667000,
      discount: 0,
      sale_tax: 266700,
      total: 2933700
    },
    {
      order_id: 198,
      customer_id: 21,
      order_date: "2024-11-08T14:23:34.000Z",
      subtotal: 1519000,
      discount: 0,
      sale_tax: 151900,
      total: 1670900
    },
    {
      order_id: 17,
      customer_id: 10,
      order_date: "2024-01-26T07:38:23.000Z",
      subtotal: 609000,
      discount: 0,
      sale_tax: 60900,
      total: 669900
    },
    {
      order_id: 212,
      customer_id: 29,
      order_date: "2024-05-16T05:50:04.000Z",
      subtotal: 467000,
      discount: 0,
      sale_tax: 46700,
      total: 513700
    },
    {
      order_id: 28,
      customer_id: 2,
      order_date: "2024-03-26T12:02:32.000Z",
      subtotal: 1057000,
      discount: 0,
      sale_tax: 105700,
      total: 1162700
    },
    {
      order_id: 404,
      customer_id: 16,
      order_date: "2024-03-15T15:23:24.000Z",
      subtotal: 1024000,
      discount: 0,
      sale_tax: 102400,
      total: 1126400
    },
    {
      order_id: 720,
      customer_id: 20,
      order_date: "2024-01-20T09:46:50.000Z",
      subtotal: 1097000,
      discount: 0,
      sale_tax: 109700,
      total: 1206700
    },
    {
      order_id: 997,
      customer_id: 15,
      order_date: "2024-01-07T20:31:27.000Z",
      subtotal: 694000,
      discount: 0,
      sale_tax: 69400,
      total: 763400
    },
    {
      order_id: 917,
      customer_id: 26,
      order_date: "2024-04-13T12:43:40.000Z",
      subtotal: 3543000,
      discount: 0,
      sale_tax: 354300,
      total: 3897300
    },
    {
      order_id: 489,
      customer_id: 43,
      order_date: "2024-03-27T05:48:35.000Z",
      subtotal: 1065000,
      discount: 0,
      sale_tax: 106500,
      total: 1171500
    },
    {
      order_id: 515,
      customer_id: 19,
      order_date: "2024-04-07T20:27:37.000Z",
      subtotal: 4038000,
      discount: 0,
      sale_tax: 403800,
      total: 4441800
    },
    {
      order_id: 1000,
      customer_id: 19,
      order_date: "2024-12-13T17:51:40.000Z",
      subtotal: 490000,
      discount: 0,
      sale_tax: 49000,
      total: 539000
    },
    {
      order_id: 616,
      customer_id: 30,
      order_date: "2024-09-16T21:28:58.000Z",
      subtotal: 2636000,
      discount: 0,
      sale_tax: 263600,
      total: 2899600
    },
    {
      order_id: 706,
      customer_id: 15,
      order_date: "2024-05-10T08:15:02.000Z",
      subtotal: 2819000,
      discount: 0,
      sale_tax: 281900,
      total: 3100900
    },
    {
      order_id: 83,
      customer_id: 48,
      order_date: "2024-06-25T22:06:26.000Z",
      subtotal: 327000,
      discount: 0,
      sale_tax: 32700,
      total: 359700
    },
    {
      order_id: 63,
      customer_id: 34,
      order_date: "2024-12-27T04:36:57.000Z",
      subtotal: 1110000,
      discount: 0,
      sale_tax: 111000,
      total: 1221000
    },
    {
      order_id: 571,
      customer_id: 40,
      order_date: "2024-01-03T10:47:55.000Z",
      subtotal: 256000,
      discount: 0,
      sale_tax: 25600,
      total: 281600
    },
    {
      order_id: 516,
      customer_id: 27,
      order_date: "2024-07-10T11:10:22.000Z",
      subtotal: 1919000,
      discount: 0,
      sale_tax: 191900,
      total: 2110900
    },
    {
      order_id: 956,
      customer_id: 27,
      order_date: "2024-02-16T13:34:36.000Z",
      subtotal: 298000,
      discount: 0,
      sale_tax: 29800,
      total: 327800
    },
    {
      order_id: 666,
      customer_id: 38,
      order_date: "2024-01-30T08:29:03.000Z",
      subtotal: 322000,
      discount: 0,
      sale_tax: 32200,
      total: 354200
    },
    {
      order_id: 542,
      customer_id: 21,
      order_date: "2024-08-24T17:28:13.000Z",
      subtotal: 3580000,
      discount: 0,
      sale_tax: 358000,
      total: 3938000
    },
    {
      order_id: 395,
      customer_id: 38,
      order_date: "2024-12-17T17:31:50.000Z",
      subtotal: 1934000,
      discount: 0,
      sale_tax: 193400,
      total: 2127400
    },
    {
      order_id: 216,
      customer_id: 17,
      order_date: "2024-02-26T07:39:31.000Z",
      subtotal: 2505000,
      discount: 0,
      sale_tax: 250500,
      total: 2755500
    },
    {
      order_id: 958,
      customer_id: 45,
      order_date: "2024-03-01T12:03:02.000Z",
      subtotal: 4305000,
      discount: 0,
      sale_tax: 430500,
      total: 4735500
    },
    {
      order_id: 882,
      customer_id: 31,
      order_date: "2024-10-06T17:56:27.000Z",
      subtotal: 756000,
      discount: 0,
      sale_tax: 75600,
      total: 831600
    },
    {
      order_id: 295,
      customer_id: 25,
      order_date: "2024-11-18T18:05:05.000Z",
      subtotal: 2868000,
      discount: 0,
      sale_tax: 286800,
      total: 3154800
    },
    {
      order_id: 694,
      customer_id: 10,
      order_date: "2024-02-27T09:50:08.000Z",
      subtotal: 48000,
      discount: 0,
      sale_tax: 4800,
      total: 52800
    },
    {
      order_id: 213,
      customer_id: 14,
      order_date: "2024-11-20T17:08:53.000Z",
      subtotal: 290000,
      discount: 0,
      sale_tax: 29000,
      total: 319000
    },
    {
      order_id: 955,
      customer_id: 37,
      order_date: "2024-11-26T14:30:35.000Z",
      subtotal: 3170000,
      discount: 0,
      sale_tax: 317000,
      total: 3487000
    },
    {
      order_id: 274,
      customer_id: 43,
      order_date: "2024-12-05T06:31:22.000Z",
      subtotal: 889000,
      discount: 0,
      sale_tax: 88900,
      total: 977900
    },
    {
      order_id: 801,
      customer_id: 29,
      order_date: "2024-11-06T12:29:38.000Z",
      subtotal: 3310000,
      discount: 0,
      sale_tax: 331000,
      total: 3641000
    },
    {
      order_id: 163,
      customer_id: 43,
      order_date: "2024-02-12T12:09:50.000Z",
      subtotal: 3238000,
      discount: 0,
      sale_tax: 323800,
      total: 3561800
    },
    {
      order_id: 833,
      customer_id: 37,
      order_date: "2024-08-21T17:23:09.000Z",
      subtotal: 1265000,
      discount: 0,
      sale_tax: 126500,
      total: 1391500
    },
    {
      order_id: 669,
      customer_id: 12,
      order_date: "2024-02-01T13:26:49.000Z",
      subtotal: 994000,
      discount: 0,
      sale_tax: 99400,
      total: 1093400
    },
    {
      order_id: 223,
      customer_id: 22,
      order_date: "2024-09-30T13:18:53.000Z",
      subtotal: 2271000,
      discount: 0,
      sale_tax: 227100,
      total: 2498100
    },
    {
      order_id: 352,
      customer_id: 25,
      order_date: "2024-12-06T15:20:19.000Z",
      subtotal: 1698000,
      discount: 0,
      sale_tax: 169800,
      total: 1867800
    },
    {
      order_id: 362,
      customer_id: 32,
      order_date: "2024-02-29T13:35:07.000Z",
      subtotal: 1718000,
      discount: 0,
      sale_tax: 171800,
      total: 1889800
    },
    {
      order_id: 221,
      customer_id: 37,
      order_date: "2024-01-04T06:33:33.000Z",
      subtotal: 2492000,
      discount: 0,
      sale_tax: 249200,
      total: 2741200
    },
    {
      order_id: 752,
      customer_id: 3,
      order_date: "2024-02-09T11:04:56.000Z",
      subtotal: 1998000,
      discount: 0,
      sale_tax: 199800,
      total: 2197800
    },
    {
      order_id: 688,
      customer_id: 21,
      order_date: "2024-08-13T20:20:38.000Z",
      subtotal: 239000,
      discount: 0,
      sale_tax: 23900,
      total: 262900
    },
    {
      order_id: 594,
      customer_id: 38,
      order_date: "2024-07-12T21:08:39.000Z",
      subtotal: 350000,
      discount: 0,
      sale_tax: 35000,
      total: 385000
    },
    {
      order_id: 460,
      customer_id: 27,
      order_date: "2024-11-26T17:22:44.000Z",
      subtotal: 5045000,
      discount: 0,
      sale_tax: 504500,
      total: 5549500
    },
    {
      order_id: 499,
      customer_id: 20,
      order_date: "2024-02-14T03:11:24.000Z",
      subtotal: 1980000,
      discount: 0,
      sale_tax: 198000,
      total: 2178000
    },
    {
      order_id: 265,
      customer_id: 3,
      order_date: "2024-11-20T17:40:22.000Z",
      subtotal: 276000,
      discount: 0,
      sale_tax: 27600,
      total: 303600
    },
    {
      order_id: 111,
      customer_id: 22,
      order_date: "2024-11-12T11:52:42.000Z",
      subtotal: 179000,
      discount: 0,
      sale_tax: 17900,
      total: 196900
    },
    {
      order_id: 851,
      customer_id: 24,
      order_date: "2024-09-06T14:00:50.000Z",
      subtotal: 2246000,
      discount: 0,
      sale_tax: 224600,
      total: 2470600
    },
    {
      order_id: 968,
      customer_id: 24,
      order_date: "2024-02-20T08:49:41.000Z",
      subtotal: 79000,
      discount: 0,
      sale_tax: 7900,
      total: 86900
    },
    {
      order_id: 16,
      customer_id: 5,
      order_date: "2024-03-20T04:45:08.000Z",
      subtotal: 1234000,
      discount: 0,
      sale_tax: 123400,
      total: 1357400
    },
    {
      order_id: 62,
      customer_id: 3,
      order_date: "2024-01-02T23:56:50.000Z",
      subtotal: 1944000,
      discount: 0,
      sale_tax: 194400,
      total: 2138400
    },
    {
      order_id: 893,
      customer_id: 37,
      order_date: "2024-02-03T11:45:58.000Z",
      subtotal: 372000,
      discount: 0,
      sale_tax: 37200,
      total: 409200
    },
    {
      order_id: 993,
      customer_id: 10,
      order_date: "2024-06-05T18:52:57.000Z",
      subtotal: 1784000,
      discount: 0,
      sale_tax: 178400,
      total: 1962400
    },
    {
      order_id: 326,
      customer_id: 45,
      order_date: "2024-05-08T20:14:05.000Z",
      subtotal: 5626000,
      discount: 0,
      sale_tax: 562600,
      total: 6188600
    },
    {
      order_id: 568,
      customer_id: 10,
      order_date: "2024-11-15T23:58:05.000Z",
      subtotal: 533000,
      discount: 0,
      sale_tax: 53300,
      total: 586300
    },
    {
      order_id: 371,
      customer_id: 33,
      order_date: "2024-12-25T07:33:23.000Z",
      subtotal: 1347000,
      discount: 0,
      sale_tax: 134700,
      total: 1481700
    },
    {
      order_id: 805,
      customer_id: 38,
      order_date: "2024-06-12T18:01:42.000Z",
      subtotal: 297000,
      discount: 0,
      sale_tax: 29700,
      total: 326700
    },
    {
      order_id: 655,
      customer_id: 33,
      order_date: "2024-10-19T04:51:12.000Z",
      subtotal: 2464000,
      discount: 0,
      sale_tax: 246400,
      total: 2710400
    },
    {
      order_id: 413,
      customer_id: 31,
      order_date: "2024-03-27T05:37:16.000Z",
      subtotal: 447000,
      discount: 0,
      sale_tax: 44700,
      total: 491700
    },
    {
      order_id: 649,
      customer_id: 47,
      order_date: "2024-12-13T22:27:37.000Z",
      subtotal: 661000,
      discount: 0,
      sale_tax: 66100,
      total: 727100
    },
    {
      order_id: 183,
      customer_id: 43,
      order_date: "2024-03-16T03:48:56.000Z",
      subtotal: 498000,
      discount: 0,
      sale_tax: 49800,
      total: 547800
    },
    {
      order_id: 100,
      customer_id: 21,
      order_date: "2024-05-10T04:09:19.000Z",
      subtotal: 5055000,
      discount: 0,
      sale_tax: 505500,
      total: 5560500
    },
    {
      order_id: 925,
      customer_id: 49,
      order_date: "2024-01-18T18:49:07.000Z",
      subtotal: 2275000,
      discount: 0,
      sale_tax: 227500,
      total: 2502500
    },
    {
      order_id: 150,
      customer_id: 26,
      order_date: "2024-04-10T08:21:09.000Z",
      subtotal: 4897000,
      discount: 0,
      sale_tax: 489700,
      total: 5386700
    },
    {
      order_id: 656,
      customer_id: 1,
      order_date: "2024-12-18T22:41:33.000Z",
      subtotal: 2417000,
      discount: 0,
      sale_tax: 241700,
      total: 2658700
    },
    {
      order_id: 421,
      customer_id: 40,
      order_date: "2024-07-20T00:31:57.000Z",
      subtotal: 100000,
      discount: 0,
      sale_tax: 10000,
      total: 110000
    },
    {
      order_id: 429,
      customer_id: 3,
      order_date: "2024-06-12T07:07:20.000Z",
      subtotal: 2678000,
      discount: 0,
      sale_tax: 267800,
      total: 2945800
    },
    {
      order_id: 835,
      customer_id: 28,
      order_date: "2024-11-17T01:31:00.000Z",
      subtotal: 772000,
      discount: 0,
      sale_tax: 77200,
      total: 849200
    },
    {
      order_id: 25,
      customer_id: 34,
      order_date: "2024-09-28T22:19:08.000Z",
      subtotal: 1245000,
      discount: 0,
      sale_tax: 124500,
      total: 1369500
    },
    {
      order_id: 141,
      customer_id: 39,
      order_date: "2024-10-31T04:32:35.000Z",
      subtotal: 1955000,
      discount: 0,
      sale_tax: 195500,
      total: 2150500
    },
    {
      order_id: 122,
      customer_id: 1,
      order_date: "2024-12-23T12:01:56.000Z",
      subtotal: 1428000,
      discount: 0,
      sale_tax: 142800,
      total: 1570800
    },
    {
      order_id: 648,
      customer_id: 12,
      order_date: "2024-02-19T09:53:24.000Z",
      subtotal: 676000,
      discount: 0,
      sale_tax: 67600,
      total: 743600
    },
    {
      order_id: 570,
      customer_id: 6,
      order_date: "2024-08-10T12:22:32.000Z",
      subtotal: 1126000,
      discount: 0,
      sale_tax: 112600,
      total: 1238600
    },
    {
      order_id: 923,
      customer_id: 14,
      order_date: "2024-05-05T12:02:25.000Z",
      subtotal: 1458000,
      discount: 0,
      sale_tax: 145800,
      total: 1603800
    },
    {
      order_id: 995,
      customer_id: 14,
      order_date: "2024-08-06T10:54:01.000Z",
      subtotal: 2040000,
      discount: 0,
      sale_tax: 204000,
      total: 2244000
    },
    {
      order_id: 434,
      customer_id: 15,
      order_date: "2024-03-07T10:17:13.000Z",
      subtotal: 980000,
      discount: 0,
      sale_tax: 98000,
      total: 1078000
    },
    {
      order_id: 211,
      customer_id: 4,
      order_date: "2024-03-27T02:56:19.000Z",
      subtotal: 1805000,
      discount: 0,
      sale_tax: 180500,
      total: 1985500
    },
    {
      order_id: 901,
      customer_id: 17,
      order_date: "2024-01-02T04:58:15.000Z",
      subtotal: 1221000,
      discount: 0,
      sale_tax: 122100,
      total: 1343100
    },
    {
      order_id: 530,
      customer_id: 41,
      order_date: "2024-04-20T23:03:47.000Z",
      subtotal: 1715000,
      discount: 0,
      sale_tax: 171500,
      total: 1886500
    },
    {
      order_id: 928,
      customer_id: 28,
      order_date: "2024-06-04T03:04:02.000Z",
      subtotal: 2189000,
      discount: 0,
      sale_tax: 218900,
      total: 2407900
    },
    {
      order_id: 536,
      customer_id: 14,
      order_date: "2024-10-23T03:26:46.000Z",
      subtotal: 568000,
      discount: 0,
      sale_tax: 56800,
      total: 624800
    },
    {
      order_id: 465,
      customer_id: 10,
      order_date: "2024-01-20T04:54:37.000Z",
      subtotal: 1256000,
      discount: 0,
      sale_tax: 125600,
      total: 1381600
    },
    {
      order_id: 449,
      customer_id: 9,
      order_date: "2024-07-12T07:25:12.000Z",
      subtotal: 2154000,
      discount: 0,
      sale_tax: 215400,
      total: 2369400
    },
    {
      order_id: 520,
      customer_id: 12,
      order_date: "2024-02-15T00:02:42.000Z",
      subtotal: 92000,
      discount: 0,
      sale_tax: 9200,
      total: 101200
    },
    {
      order_id: 64,
      customer_id: 4,
      order_date: "2024-08-31T02:43:11.000Z",
      subtotal: 167000,
      discount: 0,
      sale_tax: 16700,
      total: 183700
    },
    {
      order_id: 55,
      customer_id: 40,
      order_date: "2024-03-26T20:34:05.000Z",
      subtotal: 907000,
      discount: 0,
      sale_tax: 90700,
      total: 997700
    },
    {
      order_id: 148,
      customer_id: 15,
      order_date: "2024-08-15T01:05:24.000Z",
      subtotal: 4013000,
      discount: 0,
      sale_tax: 401300,
      total: 4414300
    },
    {
      order_id: 790,
      customer_id: 17,
      order_date: "2024-06-28T18:46:49.000Z",
      subtotal: 4193000,
      discount: 0,
      sale_tax: 419300,
      total: 4612300
    },
    {
      order_id: 828,
      customer_id: 30,
      order_date: "2024-04-12T23:26:30.000Z",
      subtotal: 1075000,
      discount: 0,
      sale_tax: 107500,
      total: 1182500
    },
    {
      order_id: 745,
      customer_id: 5,
      order_date: "2024-03-27T10:13:56.000Z",
      subtotal: 237000,
      discount: 0,
      sale_tax: 23700,
      total: 260700
    },
    {
      order_id: 534,
      customer_id: 45,
      order_date: "2024-10-21T18:16:26.000Z",
      subtotal: 175000,
      discount: 0,
      sale_tax: 17500,
      total: 192500
    },
    {
      order_id: 152,
      customer_id: 22,
      order_date: "2024-09-03T07:35:05.000Z",
      subtotal: 406000,
      discount: 0,
      sale_tax: 40600,
      total: 446600
    },
    {
      order_id: 428,
      customer_id: 34,
      order_date: "2024-05-31T21:03:34.000Z",
      subtotal: 1476000,
      discount: 0,
      sale_tax: 147600,
      total: 1623600
    },
    {
      order_id: 637,
      customer_id: 14,
      order_date: "2024-09-15T18:03:06.000Z",
      subtotal: 2608000,
      discount: 0,
      sale_tax: 260800,
      total: 2868800
    },
    {
      order_id: 355,
      customer_id: 14,
      order_date: "2024-07-28T02:13:37.000Z",
      subtotal: 1527000,
      discount: 0,
      sale_tax: 152700,
      total: 1679700
    }
  ]);
}