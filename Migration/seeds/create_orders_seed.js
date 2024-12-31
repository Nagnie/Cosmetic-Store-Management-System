/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('ORDERS').del()
  await knex('ORDERS').insert([
    {
      customer_id: 42,
      order_date: "2024-02-22T22:03:10.000Z",
      subtotal: 2789000,
      discount: 418350,
      sale_tax: 278900,
      total: 2649550
    },
    {
      customer_id: 36,
      order_date: "2024-08-04T00:10:37.000Z",
      subtotal: 2851000,
      discount: 427650,
      sale_tax: 285100,
      total: 2708450
    },
    {
      customer_id: 12,
      order_date: "2024-03-02T15:55:36.000Z",
      subtotal: 298000,
      discount: 44700,
      sale_tax: 29800,
      total: 283100
    },
    {
      customer_id: 27,
      order_date: "2024-10-18T21:13:03.000Z",
      subtotal: 1406000,
      discount: 210900,
      sale_tax: 140600,
      total: 1335700
    },
    {
      customer_id: 12,
      order_date: "2024-08-16T20:16:53.000Z",
      subtotal: 1090000,
      discount: 163500,
      sale_tax: 109000,
      total: 1035500
    },
    {
      customer_id: 17,
      order_date: "2024-09-16T11:55:25.000Z",
      subtotal: 1525000,
      discount: 228750,
      sale_tax: 152500,
      total: 1448750
    },
    {
      customer_id: 9,
      order_date: "2024-12-06T21:07:57.000Z",
      subtotal: 2064000,
      discount: 309600,
      sale_tax: 206400,
      total: 1960800
    },
    {
      customer_id: 6,
      order_date: "2024-12-14T23:36:31.000Z",
      subtotal: 218000,
      discount: 32700,
      sale_tax: 21800,
      total: 207100
    },
    {
      customer_id: 48,
      order_date: "2024-02-04T07:08:57.000Z",
      subtotal: 798000,
      discount: 119700,
      sale_tax: 79800,
      total: 758100
    },
    {
      customer_id: 32,
      order_date: "2024-12-09T12:06:34.000Z",
      subtotal: 844000,
      discount: 126600,
      sale_tax: 84400,
      total: 801800
    },
    {
      customer_id: 18,
      order_date: "2024-08-19T17:36:02.000Z",
      subtotal: 2015000,
      discount: 302250,
      sale_tax: 201500,
      total: 1914250
    },
    {
      customer_id: 24,
      order_date: "2024-11-05T20:32:21.000Z",
      subtotal: 474000,
      discount: 71100,
      sale_tax: 47400,
      total: 450300
    },
    {
      customer_id: 45,
      order_date: "2024-08-28T22:08:23.000Z",
      subtotal: 2389000,
      discount: 358350,
      sale_tax: 238900,
      total: 2269550
    },
    {
      customer_id: 24,
      order_date: "2024-05-24T18:57:42.000Z",
      subtotal: 2389000,
      discount: 358350,
      sale_tax: 238900,
      total: 2269550
    },
    {
      customer_id: 48,
      order_date: "2024-10-14T01:52:41.000Z",
      subtotal: 2814000,
      discount: 422100,
      sale_tax: 281400,
      total: 2673300
    },
    {
      customer_id: 20,
      order_date: "2024-09-16T05:17:17.000Z",
      subtotal: 1234000,
      discount: 185100,
      sale_tax: 123400,
      total: 1172300
    },
    {
      customer_id: 20,
      order_date: "2024-06-16T04:25:27.000Z",
      subtotal: 609000,
      discount: 91350,
      sale_tax: 60900,
      total: 578550
    },
    {
      customer_id: 4,
      order_date: "2024-01-02T03:26:24.000Z",
      subtotal: 532000,
      discount: 79800,
      sale_tax: 53200,
      total: 505400
    },
    {
      customer_id: 40,
      order_date: "2024-05-12T14:45:56.000Z",
      subtotal: 1264000,
      discount: 189600,
      sale_tax: 126400,
      total: 1200800
    },
    {
      customer_id: 28,
      order_date: "2024-01-31T00:13:00.000Z",
      subtotal: 592000,
      discount: 88800,
      sale_tax: 59200,
      total: 562400
    },
    {
      customer_id: 43,
      order_date: "2024-05-14T21:13:01.000Z",
      subtotal: 322000,
      discount: 48300,
      sale_tax: 32200,
      total: 305900
    },
    {
      customer_id: 34,
      order_date: "2024-09-04T20:19:52.000Z",
      subtotal: 857000,
      discount: 128550,
      sale_tax: 85700,
      total: 814150
    },
    {
      customer_id: 10,
      order_date: "2024-10-01T09:14:01.000Z",
      subtotal: 3390000,
      discount: 508500,
      sale_tax: 339000,
      total: 3220500
    },
    {
      customer_id: 40,
      order_date: "2024-04-21T09:53:23.000Z",
      subtotal: 918000,
      discount: 137700,
      sale_tax: 91800,
      total: 872100
    },
    {
      customer_id: 27,
      order_date: "2024-08-02T06:38:57.000Z",
      subtotal: 1245000,
      discount: 186750,
      sale_tax: 124500,
      total: 1182750
    },
    {
      customer_id: 35,
      order_date: "2024-11-15T19:45:30.000Z",
      subtotal: 167000,
      discount: 25050,
      sale_tax: 16700,
      total: 158650
    },
    {
      customer_id: 8,
      order_date: "2024-02-11T22:22:11.000Z",
      subtotal: 5867000,
      discount: 880050,
      sale_tax: 586700,
      total: 5573650
    },
    {
      customer_id: 20,
      order_date: "2024-01-24T15:03:14.000Z",
      subtotal: 1057000,
      discount: 158550,
      sale_tax: 105700,
      total: 1004150
    },
    {
      customer_id: 12,
      order_date: "2024-02-06T19:08:22.000Z",
      subtotal: 3451000,
      discount: 517650,
      sale_tax: 345100,
      total: 3278450
    },
    {
      customer_id: 34,
      order_date: "2024-01-24T09:31:56.000Z",
      subtotal: 1564000,
      discount: 234600,
      sale_tax: 156400,
      total: 1485800
    },
    {
      customer_id: 25,
      order_date: "2024-06-05T22:47:42.000Z",
      subtotal: 322000,
      discount: 48300,
      sale_tax: 32200,
      total: 305900
    },
    {
      customer_id: 48,
      order_date: "2024-04-07T10:10:31.000Z",
      subtotal: 2570000,
      discount: 385500,
      sale_tax: 257000,
      total: 2441500
    },
    {
      customer_id: 44,
      order_date: "2024-05-27T14:11:23.000Z",
      subtotal: 3073000,
      discount: 460950,
      sale_tax: 307300,
      total: 2919350
    },
    {
      customer_id: 29,
      order_date: "2024-07-13T23:26:37.000Z",
      subtotal: 1454000,
      discount: 218100,
      sale_tax: 145400,
      total: 1381300
    },
    {
      customer_id: 47,
      order_date: "2024-03-16T19:20:23.000Z",
      subtotal: 616000,
      discount: 92400,
      sale_tax: 61600,
      total: 585200
    },
    {
      customer_id: 31,
      order_date: "2024-04-04T15:33:00.000Z",
      subtotal: 823000,
      discount: 123450,
      sale_tax: 82300,
      total: 781850
    },
    {
      customer_id: 33,
      order_date: "2024-01-13T06:28:57.000Z",
      subtotal: 1050000,
      discount: 157500,
      sale_tax: 105000,
      total: 997500
    },
    {
      customer_id: 14,
      order_date: "2024-10-19T10:48:56.000Z",
      subtotal: 3139000,
      discount: 470850,
      sale_tax: 313900,
      total: 2982050
    },
    {
      customer_id: 1,
      order_date: "2024-04-24T10:45:30.000Z",
      subtotal: 209000,
      discount: 31350,
      sale_tax: 20900,
      total: 198550
    },
    {
      customer_id: 27,
      order_date: "2024-01-13T12:56:29.000Z",
      subtotal: 1041000,
      discount: 156150,
      sale_tax: 104100,
      total: 988950
    },
    {
      customer_id: 35,
      order_date: "2024-09-22T08:31:04.000Z",
      subtotal: 2592000,
      discount: 388800,
      sale_tax: 259200,
      total: 2462400
    },
    {
      customer_id: 19,
      order_date: "2024-12-28T09:30:41.000Z",
      subtotal: 1216000,
      discount: 182400,
      sale_tax: 121600,
      total: 1155200
    },
    {
      customer_id: 10,
      order_date: "2024-04-29T22:05:44.000Z",
      subtotal: 2094000,
      discount: 314100,
      sale_tax: 209400,
      total: 1989300
    },
    {
      customer_id: 29,
      order_date: "2024-10-06T01:21:04.000Z",
      subtotal: 1455000,
      discount: 218250,
      sale_tax: 145500,
      total: 1382250
    },
    {
      customer_id: 29,
      order_date: "2024-06-13T13:15:30.000Z",
      subtotal: 427000,
      discount: 64050,
      sale_tax: 42700,
      total: 405650
    },
    {
      customer_id: 3,
      order_date: "2024-08-27T10:34:27.000Z",
      subtotal: 1401000,
      discount: 210150,
      sale_tax: 140100,
      total: 1330950
    },
    {
      customer_id: 5,
      order_date: "2024-05-04T03:40:45.000Z",
      subtotal: 537000,
      discount: 80550,
      sale_tax: 53700,
      total: 510150
    },
    {
      customer_id: 42,
      order_date: "2024-12-07T14:03:40.000Z",
      subtotal: 709000,
      discount: 106350,
      sale_tax: 70900,
      total: 673550
    },
    {
      customer_id: 7,
      order_date: "2024-08-20T16:35:35.000Z",
      subtotal: 925000,
      discount: 138750,
      sale_tax: 92500,
      total: 878750
    },
    {
      customer_id: 36,
      order_date: "2024-06-05T23:57:50.000Z",
      subtotal: 2216000,
      discount: 332400,
      sale_tax: 221600,
      total: 2105200
    },
    {
      customer_id: 15,
      order_date: "2024-02-13T11:49:11.000Z",
      subtotal: 1018000,
      discount: 152700,
      sale_tax: 101800,
      total: 967100
    },
    {
      customer_id: 19,
      order_date: "2024-04-22T15:35:40.000Z",
      subtotal: 434000,
      discount: 65100,
      sale_tax: 43400,
      total: 412300
    },
    {
      customer_id: 14,
      order_date: "2024-08-01T20:31:55.000Z",
      subtotal: 3547000,
      discount: 532050,
      sale_tax: 354700,
      total: 3369650
    },
    {
      customer_id: 44,
      order_date: "2024-10-04T12:41:42.000Z",
      subtotal: 3520000,
      discount: 528000,
      sale_tax: 352000,
      total: 3344000
    },
    {
      customer_id: 17,
      order_date: "2024-03-13T05:49:49.000Z",
      subtotal: 907000,
      discount: 136050,
      sale_tax: 90700,
      total: 861650
    },
    {
      customer_id: 14,
      order_date: "2024-02-05T13:02:08.000Z",
      subtotal: 525000,
      discount: 78750,
      sale_tax: 52500,
      total: 498750
    },
    {
      customer_id: 16,
      order_date: "2024-11-17T21:50:37.000Z",
      subtotal: 507000,
      discount: 76050,
      sale_tax: 50700,
      total: 481650
    },
    {
      customer_id: 19,
      order_date: "2024-07-10T08:51:10.000Z",
      subtotal: 189000,
      discount: 28350,
      sale_tax: 18900,
      total: 179550
    },
    {
      customer_id: 8,
      order_date: "2024-02-28T15:30:15.000Z",
      subtotal: 3688000,
      discount: 553200,
      sale_tax: 368800,
      total: 3503600
    },
    {
      customer_id: 13,
      order_date: "2024-12-12T04:50:56.000Z",
      subtotal: 3112000,
      discount: 466800,
      sale_tax: 311200,
      total: 2956400
    },
    {
      customer_id: 24,
      order_date: "2024-05-17T16:46:10.000Z",
      subtotal: 1125000,
      discount: 168750,
      sale_tax: 112500,
      total: 1068750
    },
    {
      customer_id: 48,
      order_date: "2024-09-18T16:20:21.000Z",
      subtotal: 1944000,
      discount: 291600,
      sale_tax: 194400,
      total: 1846800
    },
    {
      customer_id: 17,
      order_date: "2024-12-19T04:12:18.000Z",
      subtotal: 1110000,
      discount: 166500,
      sale_tax: 111000,
      total: 1054500
    },
    {
      customer_id: 49,
      order_date: "2024-07-29T21:00:58.000Z",
      subtotal: 167000,
      discount: 25050,
      sale_tax: 16700,
      total: 158650
    },
    {
      customer_id: 26,
      order_date: "2024-02-23T19:34:29.000Z",
      subtotal: 3513000,
      discount: 526950,
      sale_tax: 351300,
      total: 3337350
    },
    {
      customer_id: 25,
      order_date: "2024-09-02T16:25:04.000Z",
      subtotal: 169000,
      discount: 25350,
      sale_tax: 16900,
      total: 160550
    },
    {
      customer_id: 20,
      order_date: "2024-12-19T06:54:25.000Z",
      subtotal: 1968000,
      discount: 295200,
      sale_tax: 196800,
      total: 1869600
    },
    {
      customer_id: 3,
      order_date: "2024-10-24T04:49:41.000Z",
      subtotal: 632000,
      discount: 94800,
      sale_tax: 63200,
      total: 600400
    },
    {
      customer_id: 2,
      order_date: "2024-08-14T05:46:57.000Z",
      subtotal: 796000,
      discount: 119400,
      sale_tax: 79600,
      total: 756200
    },
    {
      customer_id: 28,
      order_date: "2024-01-20T05:31:02.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 11,
      order_date: "2024-04-03T00:44:29.000Z",
      subtotal: 147000,
      discount: 22050,
      sale_tax: 14700,
      total: 139650
    },
    {
      customer_id: 44,
      order_date: "2024-05-23T12:52:33.000Z",
      subtotal: 1621000,
      discount: 243150,
      sale_tax: 162100,
      total: 1539950
    },
    {
      customer_id: 44,
      order_date: "2024-01-12T13:44:12.000Z",
      subtotal: 276000,
      discount: 41400,
      sale_tax: 27600,
      total: 262200
    },
    {
      customer_id: 17,
      order_date: "2024-09-25T20:38:53.000Z",
      subtotal: 798000,
      discount: 119700,
      sale_tax: 79800,
      total: 758100
    },
    {
      customer_id: 5,
      order_date: "2024-06-22T03:19:58.000Z",
      subtotal: 1602000,
      discount: 240300,
      sale_tax: 160200,
      total: 1521900
    },
    {
      customer_id: 20,
      order_date: "2024-06-28T05:04:33.000Z",
      subtotal: 3730000,
      discount: 559500,
      sale_tax: 373000,
      total: 3543500
    },
    {
      customer_id: 19,
      order_date: "2024-11-07T12:04:49.000Z",
      subtotal: 4049000,
      discount: 607350,
      sale_tax: 404900,
      total: 3846550
    },
    {
      customer_id: 12,
      order_date: "2024-05-17T20:36:39.000Z",
      subtotal: 3113000,
      discount: 466950,
      sale_tax: 311300,
      total: 2957350
    },
    {
      customer_id: 37,
      order_date: "2024-04-10T09:46:35.000Z",
      subtotal: 798000,
      discount: 119700,
      sale_tax: 79800,
      total: 758100
    },
    {
      customer_id: 10,
      order_date: "2024-12-11T03:06:18.000Z",
      subtotal: 2243000,
      discount: 336450,
      sale_tax: 224300,
      total: 2130850
    },
    {
      customer_id: 26,
      order_date: "2024-02-11T17:18:05.000Z",
      subtotal: 3155000,
      discount: 473250,
      sale_tax: 315500,
      total: 2997250
    },
    {
      customer_id: 40,
      order_date: "2024-06-27T19:40:08.000Z",
      subtotal: 2357000,
      discount: 353550,
      sale_tax: 235700,
      total: 2239150
    },
    {
      customer_id: 26,
      order_date: "2024-07-13T18:29:04.000Z",
      subtotal: 327000,
      discount: 49050,
      sale_tax: 32700,
      total: 310650
    },
    {
      customer_id: 38,
      order_date: "2024-08-24T07:30:30.000Z",
      subtotal: 1339000,
      discount: 200850,
      sale_tax: 133900,
      total: 1272050
    },
    {
      customer_id: 23,
      order_date: "2024-08-19T22:43:22.000Z",
      subtotal: 3870000,
      discount: 580500,
      sale_tax: 387000,
      total: 3676500
    },
    {
      customer_id: 42,
      order_date: "2024-05-06T17:50:14.000Z",
      subtotal: 92000,
      discount: 13800,
      sale_tax: 9200,
      total: 87400
    },
    {
      customer_id: 21,
      order_date: "2024-05-06T01:32:08.000Z",
      subtotal: 1386000,
      discount: 207900,
      sale_tax: 138600,
      total: 1316700
    },
    {
      customer_id: 39,
      order_date: "2024-12-13T22:21:39.000Z",
      subtotal: 738000,
      discount: 110700,
      sale_tax: 73800,
      total: 701100
    },
    {
      customer_id: 9,
      order_date: "2024-08-12T13:11:42.000Z",
      subtotal: 199000,
      discount: 29850,
      sale_tax: 19900,
      total: 189050
    },
    {
      customer_id: 37,
      order_date: "2024-09-28T22:50:07.000Z",
      subtotal: 609000,
      discount: 91350,
      sale_tax: 60900,
      total: 578550
    },
    {
      customer_id: 14,
      order_date: "2024-01-18T04:49:49.000Z",
      subtotal: 537000,
      discount: 80550,
      sale_tax: 53700,
      total: 510150
    },
    {
      customer_id: 24,
      order_date: "2024-11-28T06:54:09.000Z",
      subtotal: 2106000,
      discount: 315900,
      sale_tax: 210600,
      total: 2000700
    },
    {
      customer_id: 12,
      order_date: "2024-05-26T05:29:58.000Z",
      subtotal: 1368000,
      discount: 205200,
      sale_tax: 136800,
      total: 1299600
    },
    {
      customer_id: 5,
      order_date: "2024-05-27T11:27:14.000Z",
      subtotal: 2326000,
      discount: 348900,
      sale_tax: 232600,
      total: 2209700
    },
    {
      customer_id: 17,
      order_date: "2024-01-27T18:50:21.000Z",
      subtotal: 2395000,
      discount: 359250,
      sale_tax: 239500,
      total: 2275250
    },
    {
      customer_id: 33,
      order_date: "2024-08-12T11:21:02.000Z",
      subtotal: 2676000,
      discount: 401400,
      sale_tax: 267600,
      total: 2542200
    },
    {
      customer_id: 22,
      order_date: "2024-08-24T15:12:44.000Z",
      subtotal: 1458000,
      discount: 218700,
      sale_tax: 145800,
      total: 1385100
    },
    {
      customer_id: 8,
      order_date: "2024-07-10T20:11:54.000Z",
      subtotal: 2160000,
      discount: 324000,
      sale_tax: 216000,
      total: 2052000
    },
    {
      customer_id: 34,
      order_date: "2024-12-04T17:44:24.000Z",
      subtotal: 3567000,
      discount: 535050,
      sale_tax: 356700,
      total: 3388650
    },
    {
      customer_id: 30,
      order_date: "2024-11-26T16:21:19.000Z",
      subtotal: 5055000,
      discount: 758250,
      sale_tax: 505500,
      total: 4802250
    },
    {
      customer_id: 44,
      order_date: "2024-09-07T21:27:11.000Z",
      subtotal: 2321000,
      discount: 348150,
      sale_tax: 232100,
      total: 2204950
    },
    {
      customer_id: 10,
      order_date: "2024-09-22T01:17:16.000Z",
      subtotal: 1111000,
      discount: 166650,
      sale_tax: 111100,
      total: 1055450
    },
    {
      customer_id: 48,
      order_date: "2024-08-02T05:47:32.000Z",
      subtotal: 3385000,
      discount: 507750,
      sale_tax: 338500,
      total: 3215750
    },
    {
      customer_id: 11,
      order_date: "2024-01-09T20:27:34.000Z",
      subtotal: 2524000,
      discount: 378600,
      sale_tax: 252400,
      total: 2397800
    },
    {
      customer_id: 10,
      order_date: "2024-02-27T20:34:25.000Z",
      subtotal: 627000,
      discount: 94050,
      sale_tax: 62700,
      total: 595650
    },
    {
      customer_id: 23,
      order_date: "2024-03-07T04:30:18.000Z",
      subtotal: 670000,
      discount: 100500,
      sale_tax: 67000,
      total: 636500
    },
    {
      customer_id: 16,
      order_date: "2024-04-17T18:19:29.000Z",
      subtotal: 1354000,
      discount: 203100,
      sale_tax: 135400,
      total: 1286300
    },
    {
      customer_id: 37,
      order_date: "2024-07-04T09:26:30.000Z",
      subtotal: 924000,
      discount: 138600,
      sale_tax: 92400,
      total: 877800
    },
    {
      customer_id: 48,
      order_date: "2024-10-16T19:46:45.000Z",
      subtotal: 856000,
      discount: 128400,
      sale_tax: 85600,
      total: 813200
    },
    {
      customer_id: 6,
      order_date: "2024-09-21T08:42:51.000Z",
      subtotal: 1404000,
      discount: 210600,
      sale_tax: 140400,
      total: 1333800
    },
    {
      customer_id: 5,
      order_date: "2024-12-23T06:01:10.000Z",
      subtotal: 179000,
      discount: 26850,
      sale_tax: 17900,
      total: 170050
    },
    {
      customer_id: 26,
      order_date: "2024-11-09T04:36:24.000Z",
      subtotal: 1857000,
      discount: 278550,
      sale_tax: 185700,
      total: 1764150
    },
    {
      customer_id: 44,
      order_date: "2024-04-21T21:44:58.000Z",
      subtotal: 418000,
      discount: 62700,
      sale_tax: 41800,
      total: 397100
    },
    {
      customer_id: 3,
      order_date: "2024-05-11T11:39:23.000Z",
      subtotal: 3172000,
      discount: 475800,
      sale_tax: 317200,
      total: 3013400
    },
    {
      customer_id: 7,
      order_date: "2024-04-18T15:09:34.000Z",
      subtotal: 276000,
      discount: 41400,
      sale_tax: 27600,
      total: 262200
    },
    {
      customer_id: 37,
      order_date: "2024-03-19T08:58:53.000Z",
      subtotal: 2846000,
      discount: 426900,
      sale_tax: 284600,
      total: 2703700
    },
    {
      customer_id: 13,
      order_date: "2024-02-21T12:32:19.000Z",
      subtotal: 2783000,
      discount: 417450,
      sale_tax: 278300,
      total: 2643850
    },
    {
      customer_id: 27,
      order_date: "2024-02-12T03:49:51.000Z",
      subtotal: 743000,
      discount: 111450,
      sale_tax: 74300,
      total: 705850
    },
    {
      customer_id: 49,
      order_date: "2024-08-04T21:25:37.000Z",
      subtotal: 290000,
      discount: 43500,
      sale_tax: 29000,
      total: 275500
    },
    {
      customer_id: 49,
      order_date: "2024-06-26T22:52:33.000Z",
      subtotal: 1324000,
      discount: 198600,
      sale_tax: 132400,
      total: 1257800
    },
    {
      customer_id: 12,
      order_date: "2024-01-19T04:00:45.000Z",
      subtotal: 1945000,
      discount: 291750,
      sale_tax: 194500,
      total: 1847750
    },
    {
      customer_id: 10,
      order_date: "2024-10-31T03:45:21.000Z",
      subtotal: 1428000,
      discount: 214200,
      sale_tax: 142800,
      total: 1356600
    },
    {
      customer_id: 37,
      order_date: "2024-02-10T19:22:38.000Z",
      subtotal: 952000,
      discount: 142800,
      sale_tax: 95200,
      total: 904400
    },
    {
      customer_id: 30,
      order_date: "2024-02-02T18:32:56.000Z",
      subtotal: 294000,
      discount: 44100,
      sale_tax: 29400,
      total: 279300
    },
    {
      customer_id: 9,
      order_date: "2024-09-19T15:48:15.000Z",
      subtotal: 765000,
      discount: 114750,
      sale_tax: 76500,
      total: 726750
    },
    {
      customer_id: 41,
      order_date: "2024-05-11T05:02:37.000Z",
      subtotal: 1558000,
      discount: 233700,
      sale_tax: 155800,
      total: 1480100
    },
    {
      customer_id: 17,
      order_date: "2024-06-16T08:22:52.000Z",
      subtotal: 3514000,
      discount: 527100,
      sale_tax: 351400,
      total: 3338300
    },
    {
      customer_id: 30,
      order_date: "2024-06-26T13:30:48.000Z",
      subtotal: 1113000,
      discount: 166950,
      sale_tax: 111300,
      total: 1057350
    },
    {
      customer_id: 21,
      order_date: "2024-06-05T23:54:41.000Z",
      subtotal: 2018000,
      discount: 302700,
      sale_tax: 201800,
      total: 1917100
    },
    {
      customer_id: 47,
      order_date: "2024-08-20T05:50:46.000Z",
      subtotal: 1244000,
      discount: 186600,
      sale_tax: 124400,
      total: 1181800
    },
    {
      customer_id: 29,
      order_date: "2024-03-30T04:17:33.000Z",
      subtotal: 3211000,
      discount: 481650,
      sale_tax: 321100,
      total: 3050450
    },
    {
      customer_id: 23,
      order_date: "2024-10-23T04:19:36.000Z",
      subtotal: 1642000,
      discount: 246300,
      sale_tax: 164200,
      total: 1559900
    },
    {
      customer_id: 5,
      order_date: "2024-03-05T14:00:35.000Z",
      subtotal: 889000,
      discount: 133350,
      sale_tax: 88900,
      total: 844550
    },
    {
      customer_id: 36,
      order_date: "2024-11-21T12:36:23.000Z",
      subtotal: 4125000,
      discount: 618750,
      sale_tax: 412500,
      total: 3918750
    },
    {
      customer_id: 47,
      order_date: "2024-12-05T22:37:20.000Z",
      subtotal: 918000,
      discount: 137700,
      sale_tax: 91800,
      total: 872100
    },
    {
      customer_id: 43,
      order_date: "2024-06-03T12:33:02.000Z",
      subtotal: 1266000,
      discount: 189900,
      sale_tax: 126600,
      total: 1202700
    },
    {
      customer_id: 27,
      order_date: "2024-06-12T05:46:06.000Z",
      subtotal: 526000,
      discount: 78900,
      sale_tax: 52600,
      total: 499700
    },
    {
      customer_id: 1,
      order_date: "2024-08-23T23:53:40.000Z",
      subtotal: 1848000,
      discount: 277200,
      sale_tax: 184800,
      total: 1755600
    },
    {
      customer_id: 19,
      order_date: "2024-09-17T13:08:57.000Z",
      subtotal: 1418000,
      discount: 212700,
      sale_tax: 141800,
      total: 1347100
    },
    {
      customer_id: 9,
      order_date: "2024-12-22T06:18:06.000Z",
      subtotal: 1935000,
      discount: 290250,
      sale_tax: 193500,
      total: 1838250
    },
    {
      customer_id: 6,
      order_date: "2024-01-24T00:27:10.000Z",
      subtotal: 1955000,
      discount: 293250,
      sale_tax: 195500,
      total: 1857250
    },
    {
      customer_id: 37,
      order_date: "2024-08-29T06:35:12.000Z",
      subtotal: 687000,
      discount: 103050,
      sale_tax: 68700,
      total: 652650
    },
    {
      customer_id: 9,
      order_date: "2024-06-27T14:30:03.000Z",
      subtotal: 169000,
      discount: 25350,
      sale_tax: 16900,
      total: 160550
    },
    {
      customer_id: 6,
      order_date: "2024-02-26T09:45:50.000Z",
      subtotal: 3426000,
      discount: 513900,
      sale_tax: 342600,
      total: 3254700
    },
    {
      customer_id: 12,
      order_date: "2024-12-03T08:01:28.000Z",
      subtotal: 3122000,
      discount: 468300,
      sale_tax: 312200,
      total: 2965900
    },
    {
      customer_id: 14,
      order_date: "2024-03-28T17:54:37.000Z",
      subtotal: 1820000,
      discount: 273000,
      sale_tax: 182000,
      total: 1729000
    },
    {
      customer_id: 29,
      order_date: "2024-09-18T03:32:33.000Z",
      subtotal: 3015000,
      discount: 452250,
      sale_tax: 301500,
      total: 2864250
    },
    {
      customer_id: 49,
      order_date: "2024-04-09T12:34:02.000Z",
      subtotal: 4013000,
      discount: 601950,
      sale_tax: 401300,
      total: 3812350
    },
    {
      customer_id: 37,
      order_date: "2024-01-15T05:10:41.000Z",
      subtotal: 318000,
      discount: 47700,
      sale_tax: 31800,
      total: 302100
    },
    {
      customer_id: 29,
      order_date: "2024-05-14T06:56:05.000Z",
      subtotal: 4897000,
      discount: 734550,
      sale_tax: 489700,
      total: 4652150
    },
    {
      customer_id: 41,
      order_date: "2024-06-26T20:13:47.000Z",
      subtotal: 2482000,
      discount: 372300,
      sale_tax: 248200,
      total: 2357900
    },
    {
      customer_id: 26,
      order_date: "2024-09-04T04:31:44.000Z",
      subtotal: 406000,
      discount: 60900,
      sale_tax: 40600,
      total: 385700
    },
    {
      customer_id: 30,
      order_date: "2024-02-29T20:14:09.000Z",
      subtotal: 118000,
      discount: 17700,
      sale_tax: 11800,
      total: 112100
    },
    {
      customer_id: 36,
      order_date: "2024-06-24T00:26:20.000Z",
      subtotal: 3428000,
      discount: 514200,
      sale_tax: 342800,
      total: 3256600
    },
    {
      customer_id: 19,
      order_date: "2024-06-22T18:54:41.000Z",
      subtotal: 294000,
      discount: 44100,
      sale_tax: 29400,
      total: 279300
    },
    {
      customer_id: 33,
      order_date: "2024-02-25T20:43:38.000Z",
      subtotal: 1183000,
      discount: 177450,
      sale_tax: 118300,
      total: 1123850
    },
    {
      customer_id: 24,
      order_date: "2024-10-08T16:34:46.000Z",
      subtotal: 2145000,
      discount: 321750,
      sale_tax: 214500,
      total: 2037750
    },
    {
      customer_id: 1,
      order_date: "2024-07-15T06:04:53.000Z",
      subtotal: 1325000,
      discount: 198750,
      sale_tax: 132500,
      total: 1258750
    },
    {
      customer_id: 42,
      order_date: "2024-02-26T14:11:00.000Z",
      subtotal: 505000,
      discount: 75750,
      sale_tax: 50500,
      total: 479750
    },
    {
      customer_id: 18,
      order_date: "2024-10-17T17:40:49.000Z",
      subtotal: 697000,
      discount: 104550,
      sale_tax: 69700,
      total: 662150
    },
    {
      customer_id: 42,
      order_date: "2024-07-07T18:30:12.000Z",
      subtotal: 3328000,
      discount: 499200,
      sale_tax: 332800,
      total: 3161600
    },
    {
      customer_id: 24,
      order_date: "2024-10-27T18:51:37.000Z",
      subtotal: 1283000,
      discount: 192450,
      sale_tax: 128300,
      total: 1218850
    },
    {
      customer_id: 23,
      order_date: "2024-04-15T12:09:37.000Z",
      subtotal: 3238000,
      discount: 485700,
      sale_tax: 323800,
      total: 3076100
    },
    {
      customer_id: 5,
      order_date: "2024-12-04T03:48:44.000Z",
      subtotal: 1096000,
      discount: 164400,
      sale_tax: 109600,
      total: 1041200
    },
    {
      customer_id: 11,
      order_date: "2024-08-01T05:14:14.000Z",
      subtotal: 1197000,
      discount: 179550,
      sale_tax: 119700,
      total: 1137150
    },
    {
      customer_id: 38,
      order_date: "2024-08-02T01:42:54.000Z",
      subtotal: 1305000,
      discount: 195750,
      sale_tax: 130500,
      total: 1239750
    },
    {
      customer_id: 21,
      order_date: "2024-01-26T15:58:01.000Z",
      subtotal: 1008000,
      discount: 151200,
      sale_tax: 100800,
      total: 957600
    },
    {
      customer_id: 48,
      order_date: "2024-09-22T20:22:35.000Z",
      subtotal: 1569000,
      discount: 235350,
      sale_tax: 156900,
      total: 1490550
    },
    {
      customer_id: 23,
      order_date: "2024-09-01T16:33:42.000Z",
      subtotal: 537000,
      discount: 80550,
      sale_tax: 53700,
      total: 510150
    },
    {
      customer_id: 37,
      order_date: "2024-01-02T22:48:09.000Z",
      subtotal: 537000,
      discount: 80550,
      sale_tax: 53700,
      total: 510150
    },
    {
      customer_id: 24,
      order_date: "2024-11-30T18:09:51.000Z",
      subtotal: 969000,
      discount: 145350,
      sale_tax: 96900,
      total: 920550
    },
    {
      customer_id: 7,
      order_date: "2024-09-26T20:17:04.000Z",
      subtotal: 1845000,
      discount: 276750,
      sale_tax: 184500,
      total: 1752750
    },
    {
      customer_id: 20,
      order_date: "2024-11-03T17:36:15.000Z",
      subtotal: 4495000,
      discount: 674250,
      sale_tax: 449500,
      total: 4270250
    },
    {
      customer_id: 29,
      order_date: "2024-02-07T18:39:04.000Z",
      subtotal: 441000,
      discount: 66150,
      sale_tax: 44100,
      total: 418950
    },
    {
      customer_id: 2,
      order_date: "2024-08-13T16:41:01.000Z",
      subtotal: 1796000,
      discount: 269400,
      sale_tax: 179600,
      total: 1706200
    },
    {
      customer_id: 43,
      order_date: "2024-03-17T15:30:26.000Z",
      subtotal: 698000,
      discount: 104700,
      sale_tax: 69800,
      total: 663100
    },
    {
      customer_id: 41,
      order_date: "2024-03-19T13:20:16.000Z",
      subtotal: 1889000,
      discount: 283350,
      sale_tax: 188900,
      total: 1794550
    },
    {
      customer_id: 25,
      order_date: "2024-12-15T17:20:48.000Z",
      subtotal: 4251000,
      discount: 637650,
      sale_tax: 425100,
      total: 4038450
    },
    {
      customer_id: 41,
      order_date: "2024-07-13T03:48:15.000Z",
      subtotal: 3909000,
      discount: 586350,
      sale_tax: 390900,
      total: 3713550
    },
    {
      customer_id: 24,
      order_date: "2024-01-08T19:07:15.000Z",
      subtotal: 495000,
      discount: 74250,
      sale_tax: 49500,
      total: 470250
    },
    {
      customer_id: 2,
      order_date: "2024-12-04T10:11:36.000Z",
      subtotal: 2550000,
      discount: 382500,
      sale_tax: 255000,
      total: 2422500
    },
    {
      customer_id: 5,
      order_date: "2024-07-18T01:26:33.000Z",
      subtotal: 275000,
      discount: 41250,
      sale_tax: 27500,
      total: 261250
    },
    {
      customer_id: 9,
      order_date: "2024-06-12T11:54:23.000Z",
      subtotal: 498000,
      discount: 74700,
      sale_tax: 49800,
      total: 473100
    },
    {
      customer_id: 43,
      order_date: "2024-06-09T21:26:23.000Z",
      subtotal: 2075000,
      discount: 311250,
      sale_tax: 207500,
      total: 1971250
    },
    {
      customer_id: 12,
      order_date: "2024-05-17T20:13:04.000Z",
      subtotal: 2072000,
      discount: 310800,
      sale_tax: 207200,
      total: 1968400
    },
    {
      customer_id: 3,
      order_date: "2024-02-29T20:20:39.000Z",
      subtotal: 2754000,
      discount: 413100,
      sale_tax: 275400,
      total: 2616300
    },
    {
      customer_id: 10,
      order_date: "2024-05-20T21:50:12.000Z",
      subtotal: 2161000,
      discount: 324150,
      sale_tax: 216100,
      total: 2052950
    },
    {
      customer_id: 2,
      order_date: "2024-08-16T08:17:32.000Z",
      subtotal: 1914000,
      discount: 287100,
      sale_tax: 191400,
      total: 1818300
    },
    {
      customer_id: 43,
      order_date: "2024-11-21T15:03:47.000Z",
      subtotal: 1703000,
      discount: 255450,
      sale_tax: 170300,
      total: 1617850
    },
    {
      customer_id: 34,
      order_date: "2024-10-26T03:46:58.000Z",
      subtotal: 1319000,
      discount: 197850,
      sale_tax: 131900,
      total: 1253050
    },
    {
      customer_id: 47,
      order_date: "2024-06-10T20:35:06.000Z",
      subtotal: 229000,
      discount: 34350,
      sale_tax: 22900,
      total: 217550
    },
    {
      customer_id: 39,
      order_date: "2024-02-23T18:23:31.000Z",
      subtotal: 744000,
      discount: 111600,
      sale_tax: 74400,
      total: 706800
    },
    {
      customer_id: 17,
      order_date: "2024-11-09T04:54:27.000Z",
      subtotal: 2409000,
      discount: 361350,
      sale_tax: 240900,
      total: 2288550
    },
    {
      customer_id: 37,
      order_date: "2024-12-01T13:21:33.000Z",
      subtotal: 734000,
      discount: 110100,
      sale_tax: 73400,
      total: 697300
    },
    {
      customer_id: 37,
      order_date: "2024-02-05T22:48:45.000Z",
      subtotal: 149000,
      discount: 22350,
      sale_tax: 14900,
      total: 141550
    },
    {
      customer_id: 7,
      order_date: "2024-04-23T05:50:16.000Z",
      subtotal: 1164000,
      discount: 174600,
      sale_tax: 116400,
      total: 1105800
    },
    {
      customer_id: 34,
      order_date: "2024-07-10T14:42:20.000Z",
      subtotal: 1544000,
      discount: 231600,
      sale_tax: 154400,
      total: 1466800
    },
    {
      customer_id: 10,
      order_date: "2024-05-08T09:16:40.000Z",
      subtotal: 1519000,
      discount: 227850,
      sale_tax: 151900,
      total: 1443050
    },
    {
      customer_id: 4,
      order_date: "2024-03-01T20:13:30.000Z",
      subtotal: 4221000,
      discount: 633150,
      sale_tax: 422100,
      total: 4009950
    },
    {
      customer_id: 33,
      order_date: "2024-03-30T03:07:48.000Z",
      subtotal: 2793000,
      discount: 418950,
      sale_tax: 279300,
      total: 2653350
    },
    {
      customer_id: 11,
      order_date: "2024-08-16T06:15:36.000Z",
      subtotal: 925000,
      discount: 138750,
      sale_tax: 92500,
      total: 878750
    },
    {
      customer_id: 43,
      order_date: "2024-03-31T19:37:51.000Z",
      subtotal: 1755000,
      discount: 263250,
      sale_tax: 175500,
      total: 1667250
    },
    {
      customer_id: 41,
      order_date: "2024-03-23T06:34:21.000Z",
      subtotal: 979000,
      discount: 146850,
      sale_tax: 97900,
      total: 930050
    },
    {
      customer_id: 10,
      order_date: "2024-10-20T13:04:01.000Z",
      subtotal: 148000,
      discount: 22200,
      sale_tax: 14800,
      total: 140600
    },
    {
      customer_id: 15,
      order_date: "2024-12-09T09:27:37.000Z",
      subtotal: 2490000,
      discount: 373500,
      sale_tax: 249000,
      total: 2365500
    },
    {
      customer_id: 36,
      order_date: "2024-02-29T15:58:27.000Z",
      subtotal: 3374000,
      discount: 506100,
      sale_tax: 337400,
      total: 3205300
    },
    {
      customer_id: 25,
      order_date: "2024-05-15T13:00:35.000Z",
      subtotal: 276000,
      discount: 41400,
      sale_tax: 27600,
      total: 262200
    },
    {
      customer_id: 33,
      order_date: "2024-08-13T05:37:08.000Z",
      subtotal: 1197000,
      discount: 179550,
      sale_tax: 119700,
      total: 1137150
    },
    {
      customer_id: 45,
      order_date: "2024-06-15T19:53:15.000Z",
      subtotal: 165000,
      discount: 24750,
      sale_tax: 16500,
      total: 156750
    },
    {
      customer_id: 1,
      order_date: "2024-04-14T01:17:54.000Z",
      subtotal: 2009000,
      discount: 301350,
      sale_tax: 200900,
      total: 1908550
    },
    {
      customer_id: 11,
      order_date: "2024-01-05T18:27:29.000Z",
      subtotal: 1805000,
      discount: 270750,
      sale_tax: 180500,
      total: 1714750
    },
    {
      customer_id: 11,
      order_date: "2024-05-23T09:12:56.000Z",
      subtotal: 467000,
      discount: 70050,
      sale_tax: 46700,
      total: 443650
    },
    {
      customer_id: 21,
      order_date: "2024-03-28T21:38:05.000Z",
      subtotal: 290000,
      discount: 43500,
      sale_tax: 29000,
      total: 275500
    },
    {
      customer_id: 16,
      order_date: "2024-06-15T14:47:38.000Z",
      subtotal: 145000,
      discount: 21750,
      sale_tax: 14500,
      total: 137750
    },
    {
      customer_id: 4,
      order_date: "2024-09-13T12:03:54.000Z",
      subtotal: 349000,
      discount: 52350,
      sale_tax: 34900,
      total: 331550
    },
    {
      customer_id: 40,
      order_date: "2024-10-29T20:21:29.000Z",
      subtotal: 2505000,
      discount: 375750,
      sale_tax: 250500,
      total: 2379750
    },
    {
      customer_id: 36,
      order_date: "2024-05-17T22:06:16.000Z",
      subtotal: 1778000,
      discount: 266700,
      sale_tax: 177800,
      total: 1689100
    },
    {
      customer_id: 39,
      order_date: "2024-03-14T20:25:40.000Z",
      subtotal: 4280000,
      discount: 642000,
      sale_tax: 428000,
      total: 4066000
    },
    {
      customer_id: 43,
      order_date: "2024-10-08T18:38:29.000Z",
      subtotal: 1998000,
      discount: 299700,
      sale_tax: 199800,
      total: 1898100
    },
    {
      customer_id: 47,
      order_date: "2024-05-10T03:45:19.000Z",
      subtotal: 1171000,
      discount: 175650,
      sale_tax: 117100,
      total: 1112450
    },
    {
      customer_id: 17,
      order_date: "2024-09-17T00:45:06.000Z",
      subtotal: 2492000,
      discount: 373800,
      sale_tax: 249200,
      total: 2367400
    },
    {
      customer_id: 35,
      order_date: "2024-12-29T20:24:19.000Z",
      subtotal: 1944000,
      discount: 291600,
      sale_tax: 194400,
      total: 1846800
    },
    {
      customer_id: 14,
      order_date: "2024-05-25T13:05:25.000Z",
      subtotal: 2271000,
      discount: 340650,
      sale_tax: 227100,
      total: 2157450
    },
    {
      customer_id: 32,
      order_date: "2024-10-01T01:23:22.000Z",
      subtotal: 2989000,
      discount: 448350,
      sale_tax: 298900,
      total: 2839550
    },
    {
      customer_id: 27,
      order_date: "2024-09-12T08:10:20.000Z",
      subtotal: 1753000,
      discount: 262950,
      sale_tax: 175300,
      total: 1665350
    },
    {
      customer_id: 17,
      order_date: "2024-12-08T06:57:19.000Z",
      subtotal: 100000,
      discount: 15000,
      sale_tax: 10000,
      total: 95000
    },
    {
      customer_id: 16,
      order_date: "2024-02-26T04:11:40.000Z",
      subtotal: 1284000,
      discount: 192600,
      sale_tax: 128400,
      total: 1219800
    },
    {
      customer_id: 34,
      order_date: "2024-05-04T16:08:06.000Z",
      subtotal: 441000,
      discount: 66150,
      sale_tax: 44100,
      total: 418950
    },
    {
      customer_id: 25,
      order_date: "2024-12-28T19:32:26.000Z",
      subtotal: 3108000,
      discount: 466200,
      sale_tax: 310800,
      total: 2952600
    },
    {
      customer_id: 9,
      order_date: "2024-02-13T03:27:13.000Z",
      subtotal: 3025000,
      discount: 453750,
      sale_tax: 302500,
      total: 2873750
    },
    {
      customer_id: 14,
      order_date: "2024-06-17T00:19:01.000Z",
      subtotal: 829000,
      discount: 124350,
      sale_tax: 82900,
      total: 787550
    },
    {
      customer_id: 33,
      order_date: "2024-08-26T18:57:20.000Z",
      subtotal: 1343000,
      discount: 201450,
      sale_tax: 134300,
      total: 1275850
    },
    {
      customer_id: 31,
      order_date: "2024-01-17T16:04:55.000Z",
      subtotal: 150000,
      discount: 22500,
      sale_tax: 15000,
      total: 142500
    },
    {
      customer_id: 11,
      order_date: "2024-12-08T23:54:58.000Z",
      subtotal: 499000,
      discount: 74850,
      sale_tax: 49900,
      total: 474050
    },
    {
      customer_id: 11,
      order_date: "2024-08-01T03:48:32.000Z",
      subtotal: 1724000,
      discount: 258600,
      sale_tax: 172400,
      total: 1637800
    },
    {
      customer_id: 11,
      order_date: "2024-08-29T10:28:00.000Z",
      subtotal: 1837000,
      discount: 275550,
      sale_tax: 183700,
      total: 1745150
    },
    {
      customer_id: 8,
      order_date: "2024-05-06T10:50:49.000Z",
      subtotal: 2282000,
      discount: 342300,
      sale_tax: 228200,
      total: 2167900
    },
    {
      customer_id: 38,
      order_date: "2024-09-07T10:00:53.000Z",
      subtotal: 2667000,
      discount: 400050,
      sale_tax: 266700,
      total: 2533650
    },
    {
      customer_id: 10,
      order_date: "2024-12-23T13:22:26.000Z",
      subtotal: 698000,
      discount: 104700,
      sale_tax: 69800,
      total: 663100
    },
    {
      customer_id: 33,
      order_date: "2024-07-04T18:38:33.000Z",
      subtotal: 1201000,
      discount: 180150,
      sale_tax: 120100,
      total: 1140950
    },
    {
      customer_id: 1,
      order_date: "2024-05-20T16:41:44.000Z",
      subtotal: 2096000,
      discount: 314400,
      sale_tax: 209600,
      total: 1991200
    },
    {
      customer_id: 43,
      order_date: "2024-05-21T14:50:50.000Z",
      subtotal: 2023000,
      discount: 303450,
      sale_tax: 202300,
      total: 1921850
    },
    {
      customer_id: 35,
      order_date: "2024-02-07T07:09:49.000Z",
      subtotal: 1202000,
      discount: 180300,
      sale_tax: 120200,
      total: 1141900
    },
    {
      customer_id: 6,
      order_date: "2024-03-31T23:53:58.000Z",
      subtotal: 2916000,
      discount: 437400,
      sale_tax: 291600,
      total: 2770200
    },
    {
      customer_id: 47,
      order_date: "2024-12-23T23:11:47.000Z",
      subtotal: 827000,
      discount: 124050,
      sale_tax: 82700,
      total: 785650
    },
    {
      customer_id: 39,
      order_date: "2024-06-09T18:52:31.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 20,
      order_date: "2024-08-20T13:28:07.000Z",
      subtotal: 2007000,
      discount: 301050,
      sale_tax: 200700,
      total: 1906650
    },
    {
      customer_id: 44,
      order_date: "2024-12-12T17:18:42.000Z",
      subtotal: 99000,
      discount: 14850,
      sale_tax: 9900,
      total: 94050
    },
    {
      customer_id: 49,
      order_date: "2024-02-02T18:41:23.000Z",
      subtotal: 256000,
      discount: 38400,
      sale_tax: 25600,
      total: 243200
    },
    {
      customer_id: 49,
      order_date: "2024-02-05T06:28:44.000Z",
      subtotal: 2599000,
      discount: 389850,
      sale_tax: 259900,
      total: 2469050
    },
    {
      customer_id: 12,
      order_date: "2024-11-30T11:56:11.000Z",
      subtotal: 2498000,
      discount: 374700,
      sale_tax: 249800,
      total: 2373100
    },
    {
      customer_id: 28,
      order_date: "2024-11-26T18:55:31.000Z",
      subtotal: 72000,
      discount: 10800,
      sale_tax: 7200,
      total: 68400
    },
    {
      customer_id: 32,
      order_date: "2024-11-21T11:56:11.000Z",
      subtotal: 1622000,
      discount: 243300,
      sale_tax: 162200,
      total: 1540900
    },
    {
      customer_id: 18,
      order_date: "2024-10-07T16:37:37.000Z",
      subtotal: 2170000,
      discount: 325500,
      sale_tax: 217000,
      total: 2061500
    },
    {
      customer_id: 19,
      order_date: "2024-07-08T07:23:40.000Z",
      subtotal: 3802000,
      discount: 570300,
      sale_tax: 380200,
      total: 3611900
    },
    {
      customer_id: 23,
      order_date: "2024-02-26T09:29:46.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 33,
      order_date: "2024-12-11T22:16:07.000Z",
      subtotal: 1692000,
      discount: 253800,
      sale_tax: 169200,
      total: 1607400
    },
    {
      customer_id: 20,
      order_date: "2024-12-25T18:45:35.000Z",
      subtotal: 3282000,
      discount: 492300,
      sale_tax: 328200,
      total: 3117900
    },
    {
      customer_id: 26,
      order_date: "2024-07-24T18:42:07.000Z",
      subtotal: 1694000,
      discount: 254100,
      sale_tax: 169400,
      total: 1609300
    },
    {
      customer_id: 20,
      order_date: "2024-09-19T17:07:36.000Z",
      subtotal: 3023000,
      discount: 453450,
      sale_tax: 302300,
      total: 2871850
    },
    {
      customer_id: 9,
      order_date: "2024-04-17T16:38:41.000Z",
      subtotal: 889000,
      discount: 133350,
      sale_tax: 88900,
      total: 844550
    },
    {
      customer_id: 1,
      order_date: "2024-03-06T11:33:51.000Z",
      subtotal: 1280000,
      discount: 192000,
      sale_tax: 128000,
      total: 1216000
    },
    {
      customer_id: 6,
      order_date: "2024-10-03T00:15:11.000Z",
      subtotal: 319000,
      discount: 47850,
      sale_tax: 31900,
      total: 303050
    },
    {
      customer_id: 25,
      order_date: "2024-08-22T11:44:45.000Z",
      subtotal: 2027000,
      discount: 304050,
      sale_tax: 202700,
      total: 1925650
    },
    {
      customer_id: 23,
      order_date: "2024-08-10T11:06:48.000Z",
      subtotal: 276000,
      discount: 41400,
      sale_tax: 27600,
      total: 262200
    },
    {
      customer_id: 2,
      order_date: "2024-10-26T13:07:00.000Z",
      subtotal: 1337000,
      discount: 200550,
      sale_tax: 133700,
      total: 1270150
    },
    {
      customer_id: 25,
      order_date: "2024-08-08T07:25:02.000Z",
      subtotal: 2767000,
      discount: 415050,
      sale_tax: 276700,
      total: 2628650
    },
    {
      customer_id: 42,
      order_date: "2024-01-04T19:07:16.000Z",
      subtotal: 1378000,
      discount: 206700,
      sale_tax: 137800,
      total: 1309100
    },
    {
      customer_id: 19,
      order_date: "2024-05-04T11:17:37.000Z",
      subtotal: 2415000,
      discount: 362250,
      sale_tax: 241500,
      total: 2294250
    },
    {
      customer_id: 40,
      order_date: "2024-04-14T17:37:32.000Z",
      subtotal: 287000,
      discount: 43050,
      sale_tax: 28700,
      total: 272650
    },
    {
      customer_id: 42,
      order_date: "2024-01-23T03:20:50.000Z",
      subtotal: 2799000,
      discount: 419850,
      sale_tax: 279900,
      total: 2659050
    },
    {
      customer_id: 14,
      order_date: "2024-05-29T18:42:33.000Z",
      subtotal: 1008000,
      discount: 151200,
      sale_tax: 100800,
      total: 957600
    },
    {
      customer_id: 42,
      order_date: "2024-08-12T00:39:31.000Z",
      subtotal: 1295000,
      discount: 194250,
      sale_tax: 129500,
      total: 1230250
    },
    {
      customer_id: 9,
      order_date: "2024-07-06T12:10:14.000Z",
      subtotal: 889000,
      discount: 133350,
      sale_tax: 88900,
      total: 844550
    },
    {
      customer_id: 35,
      order_date: "2024-04-16T04:26:14.000Z",
      subtotal: 1978000,
      discount: 296700,
      sale_tax: 197800,
      total: 1879100
    },
    {
      customer_id: 44,
      order_date: "2024-01-23T13:14:36.000Z",
      subtotal: 384000,
      discount: 57600,
      sale_tax: 38400,
      total: 364800
    },
    {
      customer_id: 40,
      order_date: "2024-12-21T12:44:11.000Z",
      subtotal: 747000,
      discount: 112050,
      sale_tax: 74700,
      total: 709650
    },
    {
      customer_id: 41,
      order_date: "2024-07-15T16:02:51.000Z",
      subtotal: 2057000,
      discount: 308550,
      sale_tax: 205700,
      total: 1954150
    },
    {
      customer_id: 35,
      order_date: "2024-12-09T21:51:58.000Z",
      subtotal: 3151000,
      discount: 472650,
      sale_tax: 315100,
      total: 2993450
    },
    {
      customer_id: 20,
      order_date: "2024-05-06T05:24:29.000Z",
      subtotal: 1149000,
      discount: 172350,
      sale_tax: 114900,
      total: 1091550
    },
    {
      customer_id: 35,
      order_date: "2024-03-15T21:19:48.000Z",
      subtotal: 3092000,
      discount: 463800,
      sale_tax: 309200,
      total: 2937400
    },
    {
      customer_id: 38,
      order_date: "2024-10-25T10:07:02.000Z",
      subtotal: 3009000,
      discount: 451350,
      sale_tax: 300900,
      total: 2858550
    },
    {
      customer_id: 49,
      order_date: "2024-09-11T18:00:14.000Z",
      subtotal: 1056000,
      discount: 158400,
      sale_tax: 105600,
      total: 1003200
    },
    {
      customer_id: 40,
      order_date: "2024-01-24T09:45:46.000Z",
      subtotal: 2192000,
      discount: 328800,
      sale_tax: 219200,
      total: 2082400
    },
    {
      customer_id: 10,
      order_date: "2024-07-10T19:06:35.000Z",
      subtotal: 4965000,
      discount: 744750,
      sale_tax: 496500,
      total: 4716750
    },
    {
      customer_id: 36,
      order_date: "2024-12-06T00:28:05.000Z",
      subtotal: 853000,
      discount: 127950,
      sale_tax: 85300,
      total: 810350
    },
    {
      customer_id: 37,
      order_date: "2024-10-19T10:44:38.000Z",
      subtotal: 1792000,
      discount: 268800,
      sale_tax: 179200,
      total: 1702400
    },
    {
      customer_id: 47,
      order_date: "2024-04-02T09:51:47.000Z",
      subtotal: 2981000,
      discount: 447150,
      sale_tax: 298100,
      total: 2831950
    },
    {
      customer_id: 46,
      order_date: "2024-09-08T08:38:31.000Z",
      subtotal: 4901000,
      discount: 735150,
      sale_tax: 490100,
      total: 4655950
    },
    {
      customer_id: 2,
      order_date: "2024-07-30T01:09:58.000Z",
      subtotal: 1663000,
      discount: 249450,
      sale_tax: 166300,
      total: 1579850
    },
    {
      customer_id: 22,
      order_date: "2024-01-06T21:36:47.000Z",
      subtotal: 1098000,
      discount: 164700,
      sale_tax: 109800,
      total: 1043100
    },
    {
      customer_id: 33,
      order_date: "2024-04-28T17:18:09.000Z",
      subtotal: 829000,
      discount: 124350,
      sale_tax: 82900,
      total: 787550
    },
    {
      customer_id: 44,
      order_date: "2024-05-18T12:33:42.000Z",
      subtotal: 416000,
      discount: 62400,
      sale_tax: 41600,
      total: 395200
    },
    {
      customer_id: 24,
      order_date: "2024-12-12T09:18:47.000Z",
      subtotal: 2132000,
      discount: 319800,
      sale_tax: 213200,
      total: 2025400
    },
    {
      customer_id: 23,
      order_date: "2024-02-16T19:00:44.000Z",
      subtotal: 2868000,
      discount: 430200,
      sale_tax: 286800,
      total: 2724600
    },
    {
      customer_id: 15,
      order_date: "2024-03-20T13:51:48.000Z",
      subtotal: 2243000,
      discount: 336450,
      sale_tax: 224300,
      total: 2130850
    },
    {
      customer_id: 17,
      order_date: "2024-06-23T23:42:32.000Z",
      subtotal: 1278000,
      discount: 191700,
      sale_tax: 127800,
      total: 1214100
    },
    {
      customer_id: 34,
      order_date: "2024-10-03T20:12:25.000Z",
      subtotal: 880000,
      discount: 132000,
      sale_tax: 88000,
      total: 836000
    },
    {
      customer_id: 40,
      order_date: "2024-10-22T00:50:52.000Z",
      subtotal: 2181000,
      discount: 327150,
      sale_tax: 218100,
      total: 2071950
    },
    {
      customer_id: 42,
      order_date: "2024-01-30T12:23:31.000Z",
      subtotal: 276000,
      discount: 41400,
      sale_tax: 27600,
      total: 262200
    },
    {
      customer_id: 5,
      order_date: "2024-02-17T06:56:14.000Z",
      subtotal: 966000,
      discount: 144900,
      sale_tax: 96600,
      total: 917700
    },
    {
      customer_id: 15,
      order_date: "2024-09-03T05:19:21.000Z",
      subtotal: 966000,
      discount: 144900,
      sale_tax: 96600,
      total: 917700
    },
    {
      customer_id: 28,
      order_date: "2024-11-20T11:28:23.000Z",
      subtotal: 891000,
      discount: 133650,
      sale_tax: 89100,
      total: 846450
    },
    {
      customer_id: 28,
      order_date: "2024-12-12T17:35:20.000Z",
      subtotal: 4218000,
      discount: 632700,
      sale_tax: 421800,
      total: 4007100
    },
    {
      customer_id: 14,
      order_date: "2024-01-05T09:09:13.000Z",
      subtotal: 459000,
      discount: 68850,
      sale_tax: 45900,
      total: 436050
    },
    {
      customer_id: 30,
      order_date: "2024-10-30T20:18:43.000Z",
      subtotal: 72000,
      discount: 10800,
      sale_tax: 7200,
      total: 68400
    },
    {
      customer_id: 21,
      order_date: "2024-03-06T20:27:50.000Z",
      subtotal: 1699000,
      discount: 254850,
      sale_tax: 169900,
      total: 1614050
    },
    {
      customer_id: 30,
      order_date: "2024-06-06T14:49:27.000Z",
      subtotal: 2370000,
      discount: 355500,
      sale_tax: 237000,
      total: 2251500
    },
    {
      customer_id: 22,
      order_date: "2024-07-30T19:35:15.000Z",
      subtotal: 1093000,
      discount: 163950,
      sale_tax: 109300,
      total: 1038350
    },
    {
      customer_id: 17,
      order_date: "2024-08-23T18:05:53.000Z",
      subtotal: 1611000,
      discount: 241650,
      sale_tax: 161100,
      total: 1530450
    },
    {
      customer_id: 22,
      order_date: "2024-08-04T13:41:36.000Z",
      subtotal: 768000,
      discount: 115200,
      sale_tax: 76800,
      total: 729600
    },
    {
      customer_id: 8,
      order_date: "2024-05-24T01:37:35.000Z",
      subtotal: 1852000,
      discount: 277800,
      sale_tax: 185200,
      total: 1759400
    },
    {
      customer_id: 38,
      order_date: "2024-11-29T10:40:30.000Z",
      subtotal: 1304000,
      discount: 195600,
      sale_tax: 130400,
      total: 1238800
    },
    {
      customer_id: 2,
      order_date: "2024-02-13T06:01:05.000Z",
      subtotal: 3456000,
      discount: 518400,
      sale_tax: 345600,
      total: 3283200
    },
    {
      customer_id: 21,
      order_date: "2024-10-17T07:07:06.000Z",
      subtotal: 239000,
      discount: 35850,
      sale_tax: 23900,
      total: 227050
    },
    {
      customer_id: 15,
      order_date: "2024-03-19T00:10:55.000Z",
      subtotal: 1657000,
      discount: 248550,
      sale_tax: 165700,
      total: 1574150
    },
    {
      customer_id: 40,
      order_date: "2024-04-18T06:00:37.000Z",
      subtotal: 1184000,
      discount: 177600,
      sale_tax: 118400,
      total: 1124800
    },
    {
      customer_id: 27,
      order_date: "2024-01-02T12:10:02.000Z",
      subtotal: 837000,
      discount: 125550,
      sale_tax: 83700,
      total: 795150
    },
    {
      customer_id: 29,
      order_date: "2024-02-17T14:38:48.000Z",
      subtotal: 3024000,
      discount: 453600,
      sale_tax: 302400,
      total: 2872800
    },
    {
      customer_id: 40,
      order_date: "2024-10-13T01:05:25.000Z",
      subtotal: 1436000,
      discount: 215400,
      sale_tax: 143600,
      total: 1364200
    },
    {
      customer_id: 5,
      order_date: "2024-08-22T16:58:09.000Z",
      subtotal: 1604000,
      discount: 240600,
      sale_tax: 160400,
      total: 1523800
    },
    {
      customer_id: 40,
      order_date: "2024-01-02T23:50:10.000Z",
      subtotal: 2208000,
      discount: 331200,
      sale_tax: 220800,
      total: 2097600
    },
    {
      customer_id: 14,
      order_date: "2024-02-24T18:25:35.000Z",
      subtotal: 4529000,
      discount: 679350,
      sale_tax: 452900,
      total: 4302550
    },
    {
      customer_id: 30,
      order_date: "2024-02-22T11:33:26.000Z",
      subtotal: 2984000,
      discount: 447600,
      sale_tax: 298400,
      total: 2834800
    },
    {
      customer_id: 27,
      order_date: "2024-01-01T15:48:18.000Z",
      subtotal: 2384000,
      discount: 357600,
      sale_tax: 238400,
      total: 2264800
    },
    {
      customer_id: 47,
      order_date: "2024-06-07T05:38:09.000Z",
      subtotal: 5626000,
      discount: 843900,
      sale_tax: 562600,
      total: 5344700
    },
    {
      customer_id: 45,
      order_date: "2024-08-31T19:10:34.000Z",
      subtotal: 1644000,
      discount: 246600,
      sale_tax: 164400,
      total: 1561800
    },
    {
      customer_id: 35,
      order_date: "2024-02-16T00:47:31.000Z",
      subtotal: 358000,
      discount: 53700,
      sale_tax: 35800,
      total: 340100
    },
    {
      customer_id: 34,
      order_date: "2024-02-14T10:16:15.000Z",
      subtotal: 2480000,
      discount: 372000,
      sale_tax: 248000,
      total: 2356000
    },
    {
      customer_id: 7,
      order_date: "2024-05-14T04:46:05.000Z",
      subtotal: 843000,
      discount: 126450,
      sale_tax: 84300,
      total: 800850
    },
    {
      customer_id: 2,
      order_date: "2024-08-03T05:13:36.000Z",
      subtotal: 2097000,
      discount: 314550,
      sale_tax: 209700,
      total: 1992150
    },
    {
      customer_id: 4,
      order_date: "2024-03-06T18:18:37.000Z",
      subtotal: 2844000,
      discount: 426600,
      sale_tax: 284400,
      total: 2701800
    },
    {
      customer_id: 2,
      order_date: "2024-02-29T21:38:07.000Z",
      subtotal: 198000,
      discount: 29700,
      sale_tax: 19800,
      total: 188100
    },
    {
      customer_id: 39,
      order_date: "2024-06-05T01:17:43.000Z",
      subtotal: 218000,
      discount: 32700,
      sale_tax: 21800,
      total: 207100
    },
    {
      customer_id: 47,
      order_date: "2024-09-20T11:24:03.000Z",
      subtotal: 2815000,
      discount: 422250,
      sale_tax: 281500,
      total: 2674250
    },
    {
      customer_id: 9,
      order_date: "2024-09-08T21:50:35.000Z",
      subtotal: 1242000,
      discount: 186300,
      sale_tax: 124200,
      total: 1179900
    },
    {
      customer_id: 48,
      order_date: "2024-02-04T15:42:49.000Z",
      subtotal: 3176000,
      discount: 476400,
      sale_tax: 317600,
      total: 3017200
    },
    {
      customer_id: 41,
      order_date: "2024-05-19T16:33:34.000Z",
      subtotal: 3468000,
      discount: 520200,
      sale_tax: 346800,
      total: 3294600
    },
    {
      customer_id: 21,
      order_date: "2024-07-17T04:06:54.000Z",
      subtotal: 1950000,
      discount: 292500,
      sale_tax: 195000,
      total: 1852500
    },
    {
      customer_id: 45,
      order_date: "2024-04-13T12:52:09.000Z",
      subtotal: 641000,
      discount: 96150,
      sale_tax: 64100,
      total: 608950
    },
    {
      customer_id: 33,
      order_date: "2024-05-30T08:58:55.000Z",
      subtotal: 1470000,
      discount: 220500,
      sale_tax: 147000,
      total: 1396500
    },
    {
      customer_id: 7,
      order_date: "2024-03-14T08:50:29.000Z",
      subtotal: 803000,
      discount: 120450,
      sale_tax: 80300,
      total: 762850
    },
    {
      customer_id: 22,
      order_date: "2024-05-21T19:26:42.000Z",
      subtotal: 441000,
      discount: 66150,
      sale_tax: 44100,
      total: 418950
    },
    {
      customer_id: 34,
      order_date: "2024-02-12T04:17:48.000Z",
      subtotal: 1197000,
      discount: 179550,
      sale_tax: 119700,
      total: 1137150
    },
    {
      customer_id: 33,
      order_date: "2024-07-02T12:03:48.000Z",
      subtotal: 990000,
      discount: 148500,
      sale_tax: 99000,
      total: 940500
    },
    {
      customer_id: 45,
      order_date: "2024-01-25T23:17:16.000Z",
      subtotal: 918000,
      discount: 137700,
      sale_tax: 91800,
      total: 872100
    },
    {
      customer_id: 5,
      order_date: "2024-11-18T16:30:54.000Z",
      subtotal: 645000,
      discount: 96750,
      sale_tax: 64500,
      total: 612750
    },
    {
      customer_id: 41,
      order_date: "2024-11-07T17:51:44.000Z",
      subtotal: 1263000,
      discount: 189450,
      sale_tax: 126300,
      total: 1199850
    },
    {
      customer_id: 39,
      order_date: "2024-12-18T08:05:18.000Z",
      subtotal: 2699000,
      discount: 404850,
      sale_tax: 269900,
      total: 2564050
    },
    {
      customer_id: 37,
      order_date: "2024-12-28T11:45:21.000Z",
      subtotal: 2272000,
      discount: 340800,
      sale_tax: 227200,
      total: 2158400
    },
    {
      customer_id: 20,
      order_date: "2024-02-17T11:47:46.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 21,
      order_date: "2024-12-07T14:46:22.000Z",
      subtotal: 1698000,
      discount: 254700,
      sale_tax: 169800,
      total: 1613100
    },
    {
      customer_id: 43,
      order_date: "2024-03-02T08:05:57.000Z",
      subtotal: 239000,
      discount: 35850,
      sale_tax: 23900,
      total: 227050
    },
    {
      customer_id: 5,
      order_date: "2024-06-12T20:25:19.000Z",
      subtotal: 805000,
      discount: 120750,
      sale_tax: 80500,
      total: 764750
    },
    {
      customer_id: 22,
      order_date: "2024-03-08T22:52:09.000Z",
      subtotal: 1527000,
      discount: 229050,
      sale_tax: 152700,
      total: 1450650
    },
    {
      customer_id: 27,
      order_date: "2024-07-09T23:51:05.000Z",
      subtotal: 4122000,
      discount: 618300,
      sale_tax: 412200,
      total: 3915900
    },
    {
      customer_id: 25,
      order_date: "2024-02-18T05:24:53.000Z",
      subtotal: 767000,
      discount: 115050,
      sale_tax: 76700,
      total: 728650
    },
    {
      customer_id: 17,
      order_date: "2024-08-10T01:15:30.000Z",
      subtotal: 2576000,
      discount: 386400,
      sale_tax: 257600,
      total: 2447200
    },
    {
      customer_id: 23,
      order_date: "2024-07-03T08:42:45.000Z",
      subtotal: 1879000,
      discount: 281850,
      sale_tax: 187900,
      total: 1785050
    },
    {
      customer_id: 18,
      order_date: "2024-06-28T21:20:11.000Z",
      subtotal: 229000,
      discount: 34350,
      sale_tax: 22900,
      total: 217550
    },
    {
      customer_id: 35,
      order_date: "2024-04-14T16:08:13.000Z",
      subtotal: 507000,
      discount: 76050,
      sale_tax: 50700,
      total: 481650
    },
    {
      customer_id: 2,
      order_date: "2024-11-30T22:34:12.000Z",
      subtotal: 1718000,
      discount: 257700,
      sale_tax: 171800,
      total: 1632100
    },
    {
      customer_id: 44,
      order_date: "2024-01-12T22:16:24.000Z",
      subtotal: 480000,
      discount: 72000,
      sale_tax: 48000,
      total: 456000
    },
    {
      customer_id: 30,
      order_date: "2024-03-25T07:38:17.000Z",
      subtotal: 1816000,
      discount: 272400,
      sale_tax: 181600,
      total: 1725200
    },
    {
      customer_id: 47,
      order_date: "2024-12-05T07:51:49.000Z",
      subtotal: 2535000,
      discount: 380250,
      sale_tax: 253500,
      total: 2408250
    },
    {
      customer_id: 2,
      order_date: "2024-05-18T17:48:33.000Z",
      subtotal: 149000,
      discount: 22350,
      sale_tax: 14900,
      total: 141550
    },
    {
      customer_id: 7,
      order_date: "2024-03-12T23:28:56.000Z",
      subtotal: 2155000,
      discount: 323250,
      sale_tax: 215500,
      total: 2047250
    },
    {
      customer_id: 38,
      order_date: "2024-06-09T08:37:49.000Z",
      subtotal: 459000,
      discount: 68850,
      sale_tax: 45900,
      total: 436050
    },
    {
      customer_id: 43,
      order_date: "2024-07-01T12:09:08.000Z",
      subtotal: 1197000,
      discount: 179550,
      sale_tax: 119700,
      total: 1137150
    },
    {
      customer_id: 16,
      order_date: "2024-03-04T06:19:51.000Z",
      subtotal: 907000,
      discount: 136050,
      sale_tax: 90700,
      total: 861650
    },
    {
      customer_id: 47,
      order_date: "2024-12-02T06:47:12.000Z",
      subtotal: 1347000,
      discount: 202050,
      sale_tax: 134700,
      total: 1279650
    },
    {
      customer_id: 12,
      order_date: "2024-05-18T23:50:04.000Z",
      subtotal: 358000,
      discount: 53700,
      sale_tax: 35800,
      total: 340100
    },
    {
      customer_id: 40,
      order_date: "2024-11-06T22:02:56.000Z",
      subtotal: 3057000,
      discount: 458550,
      sale_tax: 305700,
      total: 2904150
    },
    {
      customer_id: 31,
      order_date: "2024-07-22T12:17:50.000Z",
      subtotal: 648000,
      discount: 97200,
      sale_tax: 64800,
      total: 615600
    },
    {
      customer_id: 19,
      order_date: "2024-06-19T00:49:28.000Z",
      subtotal: 2386000,
      discount: 357900,
      sale_tax: 238600,
      total: 2266700
    },
    {
      customer_id: 36,
      order_date: "2024-11-23T16:33:10.000Z",
      subtotal: 711000,
      discount: 106650,
      sale_tax: 71100,
      total: 675450
    },
    {
      customer_id: 47,
      order_date: "2024-01-10T07:48:24.000Z",
      subtotal: 239000,
      discount: 35850,
      sale_tax: 23900,
      total: 227050
    },
    {
      customer_id: 26,
      order_date: "2024-09-26T23:26:45.000Z",
      subtotal: 1144000,
      discount: 171600,
      sale_tax: 114400,
      total: 1086800
    },
    {
      customer_id: 45,
      order_date: "2024-03-06T20:38:43.000Z",
      subtotal: 3344000,
      discount: 501600,
      sale_tax: 334400,
      total: 3176800
    },
    {
      customer_id: 7,
      order_date: "2024-02-20T00:40:48.000Z",
      subtotal: 3747000,
      discount: 562050,
      sale_tax: 374700,
      total: 3559650
    },
    {
      customer_id: 26,
      order_date: "2024-03-01T21:06:25.000Z",
      subtotal: 1921000,
      discount: 288150,
      sale_tax: 192100,
      total: 1824950
    },
    {
      customer_id: 31,
      order_date: "2024-06-17T13:22:03.000Z",
      subtotal: 972000,
      discount: 145800,
      sale_tax: 97200,
      total: 923400
    },
    {
      customer_id: 7,
      order_date: "2024-06-27T09:07:05.000Z",
      subtotal: 2546000,
      discount: 381900,
      sale_tax: 254600,
      total: 2418700
    },
    {
      customer_id: 49,
      order_date: "2024-03-29T22:21:47.000Z",
      subtotal: 150000,
      discount: 22500,
      sale_tax: 15000,
      total: 142500
    },
    {
      customer_id: 22,
      order_date: "2024-09-17T12:45:35.000Z",
      subtotal: 874000,
      discount: 131100,
      sale_tax: 87400,
      total: 830300
    },
    {
      customer_id: 7,
      order_date: "2024-07-20T03:28:05.000Z",
      subtotal: 237000,
      discount: 35550,
      sale_tax: 23700,
      total: 225150
    },
    {
      customer_id: 49,
      order_date: "2024-01-29T08:05:23.000Z",
      subtotal: 546000,
      discount: 81900,
      sale_tax: 54600,
      total: 518700
    },
    {
      customer_id: 28,
      order_date: "2024-06-13T09:14:41.000Z",
      subtotal: 3102000,
      discount: 465300,
      sale_tax: 310200,
      total: 2946900
    },
    {
      customer_id: 39,
      order_date: "2024-06-27T23:15:36.000Z",
      subtotal: 661000,
      discount: 99150,
      sale_tax: 66100,
      total: 627950
    },
    {
      customer_id: 43,
      order_date: "2024-03-18T19:36:43.000Z",
      subtotal: 2158000,
      discount: 323700,
      sale_tax: 215800,
      total: 2050100
    },
    {
      customer_id: 5,
      order_date: "2024-06-21T11:38:35.000Z",
      subtotal: 1897000,
      discount: 284550,
      sale_tax: 189700,
      total: 1802150
    },
    {
      customer_id: 38,
      order_date: "2024-12-10T01:15:35.000Z",
      subtotal: 1458000,
      discount: 218700,
      sale_tax: 145800,
      total: 1385100
    },
    {
      customer_id: 17,
      order_date: "2024-04-20T07:50:31.000Z",
      subtotal: 4840000,
      discount: 726000,
      sale_tax: 484000,
      total: 4598000
    },
    {
      customer_id: 12,
      order_date: "2024-08-15T06:49:56.000Z",
      subtotal: 408000,
      discount: 61200,
      sale_tax: 40800,
      total: 387600
    },
    {
      customer_id: 34,
      order_date: "2024-01-10T01:44:28.000Z",
      subtotal: 1934000,
      discount: 290100,
      sale_tax: 193400,
      total: 1837300
    },
    {
      customer_id: 5,
      order_date: "2024-12-07T14:09:16.000Z",
      subtotal: 514000,
      discount: 77100,
      sale_tax: 51400,
      total: 488300
    },
    {
      customer_id: 28,
      order_date: "2024-01-17T08:13:34.000Z",
      subtotal: 1497000,
      discount: 224550,
      sale_tax: 149700,
      total: 1422150
    },
    {
      customer_id: 35,
      order_date: "2024-05-23T03:57:50.000Z",
      subtotal: 847000,
      discount: 127050,
      sale_tax: 84700,
      total: 804650
    },
    {
      customer_id: 47,
      order_date: "2024-09-12T17:16:11.000Z",
      subtotal: 2113000,
      discount: 316950,
      sale_tax: 211300,
      total: 2007350
    },
    {
      customer_id: 12,
      order_date: "2024-11-10T09:25:34.000Z",
      subtotal: 199000,
      discount: 29850,
      sale_tax: 19900,
      total: 189050
    },
    {
      customer_id: 12,
      order_date: "2024-09-24T00:17:40.000Z",
      subtotal: 1380000,
      discount: 207000,
      sale_tax: 138000,
      total: 1311000
    },
    {
      customer_id: 28,
      order_date: "2024-01-28T22:25:23.000Z",
      subtotal: 2415000,
      discount: 362250,
      sale_tax: 241500,
      total: 2294250
    },
    {
      customer_id: 21,
      order_date: "2024-10-23T09:17:03.000Z",
      subtotal: 3272000,
      discount: 490800,
      sale_tax: 327200,
      total: 3108400
    },
    {
      customer_id: 31,
      order_date: "2024-09-20T09:57:14.000Z",
      subtotal: 1024000,
      discount: 153600,
      sale_tax: 102400,
      total: 972800
    },
    {
      customer_id: 12,
      order_date: "2024-06-02T18:04:56.000Z",
      subtotal: 805000,
      discount: 120750,
      sale_tax: 80500,
      total: 764750
    },
    {
      customer_id: 30,
      order_date: "2024-12-05T03:54:37.000Z",
      subtotal: 1327000,
      discount: 199050,
      sale_tax: 132700,
      total: 1260650
    },
    {
      customer_id: 18,
      order_date: "2024-11-10T03:57:40.000Z",
      subtotal: 2435000,
      discount: 365250,
      sale_tax: 243500,
      total: 2313250
    },
    {
      customer_id: 18,
      order_date: "2024-05-05T12:19:22.000Z",
      subtotal: 1995000,
      discount: 299250,
      sale_tax: 199500,
      total: 1895250
    },
    {
      customer_id: 44,
      order_date: "2024-06-28T14:43:39.000Z",
      subtotal: 784000,
      discount: 117600,
      sale_tax: 78400,
      total: 744800
    },
    {
      customer_id: 37,
      order_date: "2024-02-14T06:07:15.000Z",
      subtotal: 1105000,
      discount: 165750,
      sale_tax: 110500,
      total: 1049750
    },
    {
      customer_id: 42,
      order_date: "2024-05-22T10:32:48.000Z",
      subtotal: 198000,
      discount: 29700,
      sale_tax: 19800,
      total: 188100
    },
    {
      customer_id: 43,
      order_date: "2024-02-17T10:27:47.000Z",
      subtotal: 1647000,
      discount: 247050,
      sale_tax: 164700,
      total: 1564650
    },
    {
      customer_id: 42,
      order_date: "2024-09-17T05:29:18.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 1,
      order_date: "2024-10-14T10:15:43.000Z",
      subtotal: 3736000,
      discount: 560400,
      sale_tax: 373600,
      total: 3549200
    },
    {
      customer_id: 4,
      order_date: "2024-10-12T01:54:52.000Z",
      subtotal: 1075000,
      discount: 161250,
      sale_tax: 107500,
      total: 1021250
    },
    {
      customer_id: 21,
      order_date: "2024-07-29T15:45:25.000Z",
      subtotal: 1244000,
      discount: 186600,
      sale_tax: 124400,
      total: 1181800
    },
    {
      customer_id: 37,
      order_date: "2024-11-26T03:13:04.000Z",
      subtotal: 1296000,
      discount: 194400,
      sale_tax: 129600,
      total: 1231200
    },
    {
      customer_id: 44,
      order_date: "2024-01-14T16:21:09.000Z",
      subtotal: 852000,
      discount: 127800,
      sale_tax: 85200,
      total: 809400
    },
    {
      customer_id: 14,
      order_date: "2024-09-28T09:55:55.000Z",
      subtotal: 1135000,
      discount: 170250,
      sale_tax: 113500,
      total: 1078250
    },
    {
      customer_id: 18,
      order_date: "2024-05-03T19:27:40.000Z",
      subtotal: 1643000,
      discount: 246450,
      sale_tax: 164300,
      total: 1560850
    },
    {
      customer_id: 36,
      order_date: "2024-02-26T18:03:04.000Z",
      subtotal: 100000,
      discount: 15000,
      sale_tax: 10000,
      total: 95000
    },
    {
      customer_id: 5,
      order_date: "2024-05-29T13:39:41.000Z",
      subtotal: 2329000,
      discount: 349350,
      sale_tax: 232900,
      total: 2212550
    },
    {
      customer_id: 23,
      order_date: "2024-10-17T21:08:13.000Z",
      subtotal: 3588000,
      discount: 538200,
      sale_tax: 358800,
      total: 3408600
    },
    {
      customer_id: 49,
      order_date: "2024-06-22T13:32:25.000Z",
      subtotal: 4015000,
      discount: 602250,
      sale_tax: 401500,
      total: 3814250
    },
    {
      customer_id: 15,
      order_date: "2024-10-27T01:39:18.000Z",
      subtotal: 1584000,
      discount: 237600,
      sale_tax: 158400,
      total: 1504800
    },
    {
      customer_id: 18,
      order_date: "2024-09-17T12:54:42.000Z",
      subtotal: 3471000,
      discount: 520650,
      sale_tax: 347100,
      total: 3297450
    },
    {
      customer_id: 33,
      order_date: "2024-03-05T15:08:07.000Z",
      subtotal: 651000,
      discount: 97650,
      sale_tax: 65100,
      total: 618450
    },
    {
      customer_id: 1,
      order_date: "2024-10-18T06:34:23.000Z",
      subtotal: 1476000,
      discount: 221400,
      sale_tax: 147600,
      total: 1402200
    },
    {
      customer_id: 12,
      order_date: "2024-02-28T13:06:39.000Z",
      subtotal: 2678000,
      discount: 401700,
      sale_tax: 267800,
      total: 2544100
    },
    {
      customer_id: 12,
      order_date: "2024-03-23T19:01:13.000Z",
      subtotal: 864000,
      discount: 129600,
      sale_tax: 86400,
      total: 820800
    },
    {
      customer_id: 8,
      order_date: "2024-07-14T16:25:21.000Z",
      subtotal: 1886000,
      discount: 282900,
      sale_tax: 188600,
      total: 1791700
    },
    {
      customer_id: 46,
      order_date: "2024-02-20T04:17:32.000Z",
      subtotal: 2187000,
      discount: 328050,
      sale_tax: 218700,
      total: 2077650
    },
    {
      customer_id: 38,
      order_date: "2024-04-25T16:57:48.000Z",
      subtotal: 3739000,
      discount: 560850,
      sale_tax: 373900,
      total: 3552050
    },
    {
      customer_id: 35,
      order_date: "2024-10-27T21:05:48.000Z",
      subtotal: 980000,
      discount: 147000,
      sale_tax: 98000,
      total: 931000
    },
    {
      customer_id: 7,
      order_date: "2024-04-03T19:58:18.000Z",
      subtotal: 638000,
      discount: 95700,
      sale_tax: 63800,
      total: 606100
    },
    {
      customer_id: 46,
      order_date: "2024-07-25T22:13:11.000Z",
      subtotal: 463000,
      discount: 69450,
      sale_tax: 46300,
      total: 439850
    },
    {
      customer_id: 39,
      order_date: "2024-07-21T20:46:31.000Z",
      subtotal: 256000,
      discount: 38400,
      sale_tax: 25600,
      total: 243200
    },
    {
      customer_id: 40,
      order_date: "2024-03-30T03:34:25.000Z",
      subtotal: 4307000,
      discount: 646050,
      sale_tax: 430700,
      total: 4091650
    },
    {
      customer_id: 31,
      order_date: "2024-07-26T00:45:54.000Z",
      subtotal: 3572000,
      discount: 535800,
      sale_tax: 357200,
      total: 3393400
    },
    {
      customer_id: 8,
      order_date: "2024-07-17T22:10:41.000Z",
      subtotal: 5072000,
      discount: 760800,
      sale_tax: 507200,
      total: 4818400
    },
    {
      customer_id: 25,
      order_date: "2024-04-16T17:48:31.000Z",
      subtotal: 1174000,
      discount: 176100,
      sale_tax: 117400,
      total: 1115300
    },
    {
      customer_id: 5,
      order_date: "2024-10-08T14:39:36.000Z",
      subtotal: 290000,
      discount: 43500,
      sale_tax: 29000,
      total: 275500
    },
    {
      customer_id: 41,
      order_date: "2024-10-20T06:09:12.000Z",
      subtotal: 910000,
      discount: 136500,
      sale_tax: 91000,
      total: 864500
    },
    {
      customer_id: 18,
      order_date: "2024-10-08T05:40:57.000Z",
      subtotal: 2064000,
      discount: 309600,
      sale_tax: 206400,
      total: 1960800
    },
    {
      customer_id: 9,
      order_date: "2024-07-29T09:27:53.000Z",
      subtotal: 3886000,
      discount: 582900,
      sale_tax: 388600,
      total: 3691700
    },
    {
      customer_id: 30,
      order_date: "2024-01-30T16:45:41.000Z",
      subtotal: 3685000,
      discount: 552750,
      sale_tax: 368500,
      total: 3500750
    },
    {
      customer_id: 10,
      order_date: "2024-11-22T09:50:16.000Z",
      subtotal: 840000,
      discount: 126000,
      sale_tax: 84000,
      total: 798000
    },
    {
      customer_id: 23,
      order_date: "2024-05-06T05:04:56.000Z",
      subtotal: 1418000,
      discount: 212700,
      sale_tax: 141800,
      total: 1347100
    },
    {
      customer_id: 20,
      order_date: "2024-08-09T18:05:16.000Z",
      subtotal: 2154000,
      discount: 323100,
      sale_tax: 215400,
      total: 2046300
    },
    {
      customer_id: 6,
      order_date: "2024-06-14T14:06:23.000Z",
      subtotal: 2997000,
      discount: 449550,
      sale_tax: 299700,
      total: 2847150
    },
    {
      customer_id: 4,
      order_date: "2024-01-17T12:40:17.000Z",
      subtotal: 1578000,
      discount: 236700,
      sale_tax: 157800,
      total: 1499100
    },
    {
      customer_id: 39,
      order_date: "2024-08-16T08:09:29.000Z",
      subtotal: 1572000,
      discount: 235800,
      sale_tax: 157200,
      total: 1493400
    },
    {
      customer_id: 25,
      order_date: "2024-05-15T18:24:41.000Z",
      subtotal: 1446000,
      discount: 216900,
      sale_tax: 144600,
      total: 1373700
    },
    {
      customer_id: 6,
      order_date: "2024-11-13T00:43:56.000Z",
      subtotal: 1569000,
      discount: 235350,
      sale_tax: 156900,
      total: 1490550
    },
    {
      customer_id: 18,
      order_date: "2024-03-10T05:50:53.000Z",
      subtotal: 2641000,
      discount: 396150,
      sale_tax: 264100,
      total: 2508950
    },
    {
      customer_id: 33,
      order_date: "2024-10-24T22:52:53.000Z",
      subtotal: 1465000,
      discount: 219750,
      sale_tax: 146500,
      total: 1391750
    },
    {
      customer_id: 35,
      order_date: "2024-09-20T14:17:04.000Z",
      subtotal: 1477000,
      discount: 221550,
      sale_tax: 147700,
      total: 1403150
    },
    {
      customer_id: 24,
      order_date: "2024-03-03T23:09:10.000Z",
      subtotal: 369000,
      discount: 55350,
      sale_tax: 36900,
      total: 350550
    },
    {
      customer_id: 27,
      order_date: "2024-01-24T14:28:04.000Z",
      subtotal: 1047000,
      discount: 157050,
      sale_tax: 104700,
      total: 994650
    },
    {
      customer_id: 7,
      order_date: "2024-08-09T00:01:09.000Z",
      subtotal: 5045000,
      discount: 756750,
      sale_tax: 504500,
      total: 4792750
    },
    {
      customer_id: 12,
      order_date: "2024-03-17T11:46:06.000Z",
      subtotal: 1075000,
      discount: 161250,
      sale_tax: 107500,
      total: 1021250
    },
    {
      customer_id: 37,
      order_date: "2024-04-05T13:25:54.000Z",
      subtotal: 465000,
      discount: 69750,
      sale_tax: 46500,
      total: 441750
    },
    {
      customer_id: 11,
      order_date: "2024-06-27T17:38:44.000Z",
      subtotal: 2867000,
      discount: 430050,
      sale_tax: 286700,
      total: 2723650
    },
    {
      customer_id: 16,
      order_date: "2024-02-23T12:27:40.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 30,
      order_date: "2024-05-05T19:30:06.000Z",
      subtotal: 1256000,
      discount: 188400,
      sale_tax: 125600,
      total: 1193200
    },
    {
      customer_id: 13,
      order_date: "2024-08-02T03:34:10.000Z",
      subtotal: 79000,
      discount: 11850,
      sale_tax: 7900,
      total: 75050
    },
    {
      customer_id: 37,
      order_date: "2024-06-28T15:53:05.000Z",
      subtotal: 2422000,
      discount: 363300,
      sale_tax: 242200,
      total: 2300900
    },
    {
      customer_id: 5,
      order_date: "2024-07-19T15:07:00.000Z",
      subtotal: 1783000,
      discount: 267450,
      sale_tax: 178300,
      total: 1693850
    },
    {
      customer_id: 6,
      order_date: "2024-04-10T19:37:32.000Z",
      subtotal: 276000,
      discount: 41400,
      sale_tax: 27600,
      total: 262200
    },
    {
      customer_id: 5,
      order_date: "2024-04-10T14:29:35.000Z",
      subtotal: 1534000,
      discount: 230100,
      sale_tax: 153400,
      total: 1457300
    },
    {
      customer_id: 9,
      order_date: "2024-06-03T00:02:49.000Z",
      subtotal: 3019000,
      discount: 452850,
      sale_tax: 301900,
      total: 2868050
    },
    {
      customer_id: 8,
      order_date: "2024-05-31T03:22:31.000Z",
      subtotal: 719000,
      discount: 107850,
      sale_tax: 71900,
      total: 683050
    },
    {
      customer_id: 4,
      order_date: "2024-02-01T10:15:57.000Z",
      subtotal: 2538000,
      discount: 380700,
      sale_tax: 253800,
      total: 2411100
    },
    {
      customer_id: 16,
      order_date: "2024-01-09T16:31:14.000Z",
      subtotal: 1389000,
      discount: 208350,
      sale_tax: 138900,
      total: 1319550
    },
    {
      customer_id: 32,
      order_date: "2024-07-02T05:57:57.000Z",
      subtotal: 158000,
      discount: 23700,
      sale_tax: 15800,
      total: 150100
    },
    {
      customer_id: 39,
      order_date: "2024-08-30T18:47:32.000Z",
      subtotal: 1592000,
      discount: 238800,
      sale_tax: 159200,
      total: 1512400
    },
    {
      customer_id: 31,
      order_date: "2023-12-31T03:15:55.000Z",
      subtotal: 2026000,
      discount: 303900,
      sale_tax: 202600,
      total: 1924700
    },
    {
      customer_id: 20,
      order_date: "2024-03-13T04:00:35.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 40,
      order_date: "2024-12-10T20:57:10.000Z",
      subtotal: 3161000,
      discount: 474150,
      sale_tax: 316100,
      total: 3002950
    },
    {
      customer_id: 44,
      order_date: "2024-02-28T23:04:42.000Z",
      subtotal: 1694000,
      discount: 254100,
      sale_tax: 169400,
      total: 1609300
    },
    {
      customer_id: 12,
      order_date: "2024-06-29T11:22:05.000Z",
      subtotal: 3248000,
      discount: 487200,
      sale_tax: 324800,
      total: 3085600
    },
    {
      customer_id: 8,
      order_date: "2024-10-20T00:56:00.000Z",
      subtotal: 1692000,
      discount: 253800,
      sale_tax: 169200,
      total: 1607400
    },
    {
      customer_id: 29,
      order_date: "2024-10-08T17:57:55.000Z",
      subtotal: 781000,
      discount: 117150,
      sale_tax: 78100,
      total: 741950
    },
    {
      customer_id: 33,
      order_date: "2024-01-02T19:13:34.000Z",
      subtotal: 1580000,
      discount: 237000,
      sale_tax: 158000,
      total: 1501000
    },
    {
      customer_id: 17,
      order_date: "2024-05-20T20:05:23.000Z",
      subtotal: 1079000,
      discount: 161850,
      sale_tax: 107900,
      total: 1025050
    },
    {
      customer_id: 24,
      order_date: "2024-11-20T01:22:38.000Z",
      subtotal: 3888000,
      discount: 583200,
      sale_tax: 388800,
      total: 3693600
    },
    {
      customer_id: 48,
      order_date: "2024-03-05T05:14:45.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 27,
      order_date: "2024-11-22T21:44:19.000Z",
      subtotal: 2742000,
      discount: 411300,
      sale_tax: 274200,
      total: 2604900
    },
    {
      customer_id: 37,
      order_date: "2024-08-12T23:01:19.000Z",
      subtotal: 1065000,
      discount: 159750,
      sale_tax: 106500,
      total: 1011750
    },
    {
      customer_id: 45,
      order_date: "2024-06-06T20:03:06.000Z",
      subtotal: 1169000,
      discount: 175350,
      sale_tax: 116900,
      total: 1110550
    },
    {
      customer_id: 49,
      order_date: "2024-08-01T12:57:07.000Z",
      subtotal: 686000,
      discount: 102900,
      sale_tax: 68600,
      total: 651700
    },
    {
      customer_id: 9,
      order_date: "2024-09-20T13:55:21.000Z",
      subtotal: 3191000,
      discount: 478650,
      sale_tax: 319100,
      total: 3031450
    },
    {
      customer_id: 23,
      order_date: "2024-05-03T13:34:05.000Z",
      subtotal: 2220000,
      discount: 333000,
      sale_tax: 222000,
      total: 2109000
    },
    {
      customer_id: 43,
      order_date: "2024-09-26T20:12:25.000Z",
      subtotal: 898000,
      discount: 134700,
      sale_tax: 89800,
      total: 853100
    },
    {
      customer_id: 48,
      order_date: "2024-11-15T18:11:11.000Z",
      subtotal: 1065000,
      discount: 159750,
      sale_tax: 106500,
      total: 1011750
    },
    {
      customer_id: 32,
      order_date: "2024-01-19T15:40:39.000Z",
      subtotal: 458000,
      discount: 68700,
      sale_tax: 45800,
      total: 435100
    },
    {
      customer_id: 44,
      order_date: "2024-09-02T14:37:27.000Z",
      subtotal: 1330000,
      discount: 199500,
      sale_tax: 133000,
      total: 1263500
    },
    {
      customer_id: 38,
      order_date: "2024-01-07T13:15:32.000Z",
      subtotal: 2491000,
      discount: 373650,
      sale_tax: 249100,
      total: 2366450
    },
    {
      customer_id: 27,
      order_date: "2024-04-06T19:05:50.000Z",
      subtotal: 1980000,
      discount: 297000,
      sale_tax: 198000,
      total: 1881000
    },
    {
      customer_id: 43,
      order_date: "2024-09-05T18:28:42.000Z",
      subtotal: 1796000,
      discount: 269400,
      sale_tax: 179600,
      total: 1706200
    },
    {
      customer_id: 16,
      order_date: "2024-08-08T08:07:34.000Z",
      subtotal: 698000,
      discount: 104700,
      sale_tax: 69800,
      total: 663100
    },
    {
      customer_id: 30,
      order_date: "2024-04-24T15:17:04.000Z",
      subtotal: 694000,
      discount: 104100,
      sale_tax: 69400,
      total: 659300
    },
    {
      customer_id: 43,
      order_date: "2024-05-07T06:52:56.000Z",
      subtotal: 2074000,
      discount: 311100,
      sale_tax: 207400,
      total: 1970300
    },
    {
      customer_id: 27,
      order_date: "2024-06-21T07:23:12.000Z",
      subtotal: 3969000,
      discount: 595350,
      sale_tax: 396900,
      total: 3770550
    },
    {
      customer_id: 5,
      order_date: "2024-03-13T14:37:51.000Z",
      subtotal: 3462000,
      discount: 519300,
      sale_tax: 346200,
      total: 3288900
    },
    {
      customer_id: 23,
      order_date: "2024-09-12T13:15:32.000Z",
      subtotal: 1378000,
      discount: 206700,
      sale_tax: 137800,
      total: 1309100
    },
    {
      customer_id: 39,
      order_date: "2024-02-17T01:15:33.000Z",
      subtotal: 1427000,
      discount: 214050,
      sale_tax: 142700,
      total: 1355650
    },
    {
      customer_id: 42,
      order_date: "2024-09-08T20:16:11.000Z",
      subtotal: 1011000,
      discount: 151650,
      sale_tax: 101100,
      total: 960450
    },
    {
      customer_id: 43,
      order_date: "2024-11-21T05:24:05.000Z",
      subtotal: 873000,
      discount: 130950,
      sale_tax: 87300,
      total: 829350
    },
    {
      customer_id: 20,
      order_date: "2024-09-10T00:22:15.000Z",
      subtotal: 2667000,
      discount: 400050,
      sale_tax: 266700,
      total: 2533650
    },
    {
      customer_id: 14,
      order_date: "2024-01-07T08:14:47.000Z",
      subtotal: 2193000,
      discount: 328950,
      sale_tax: 219300,
      total: 2083350
    },
    {
      customer_id: 45,
      order_date: "2024-08-15T23:57:21.000Z",
      subtotal: 405000,
      discount: 60750,
      sale_tax: 40500,
      total: 384750
    },
    {
      customer_id: 26,
      order_date: "2024-07-25T13:23:13.000Z",
      subtotal: 4085000,
      discount: 612750,
      sale_tax: 408500,
      total: 3880750
    },
    {
      customer_id: 29,
      order_date: "2024-10-01T13:22:58.000Z",
      subtotal: 1137000,
      discount: 170550,
      sale_tax: 113700,
      total: 1080150
    },
    {
      customer_id: 11,
      order_date: "2024-07-03T03:02:02.000Z",
      subtotal: 4038000,
      discount: 605700,
      sale_tax: 403800,
      total: 3836100
    },
    {
      customer_id: 22,
      order_date: "2024-05-30T04:47:07.000Z",
      subtotal: 1919000,
      discount: 287850,
      sale_tax: 191900,
      total: 1823050
    },
    {
      customer_id: 47,
      order_date: "2024-02-19T08:46:58.000Z",
      subtotal: 2490000,
      discount: 373500,
      sale_tax: 249000,
      total: 2365500
    },
    {
      customer_id: 25,
      order_date: "2024-02-20T17:09:07.000Z",
      subtotal: 2631000,
      discount: 394650,
      sale_tax: 263100,
      total: 2499450
    },
    {
      customer_id: 38,
      order_date: "2024-02-10T16:05:41.000Z",
      subtotal: 1457000,
      discount: 218550,
      sale_tax: 145700,
      total: 1384150
    },
    {
      customer_id: 20,
      order_date: "2024-02-12T07:30:39.000Z",
      subtotal: 92000,
      discount: 13800,
      sale_tax: 9200,
      total: 87400
    },
    {
      customer_id: 5,
      order_date: "2024-05-20T19:11:30.000Z",
      subtotal: 990000,
      discount: 148500,
      sale_tax: 99000,
      total: 940500
    },
    {
      customer_id: 36,
      order_date: "2024-07-26T12:27:54.000Z",
      subtotal: 994000,
      discount: 149100,
      sale_tax: 99400,
      total: 944300
    },
    {
      customer_id: 39,
      order_date: "2024-10-15T18:58:12.000Z",
      subtotal: 1811000,
      discount: 271650,
      sale_tax: 181100,
      total: 1720450
    },
    {
      customer_id: 1,
      order_date: "2024-11-24T21:48:14.000Z",
      subtotal: 951000,
      discount: 142650,
      sale_tax: 95100,
      total: 903450
    },
    {
      customer_id: 48,
      order_date: "2024-06-11T16:23:14.000Z",
      subtotal: 1291000,
      discount: 193650,
      sale_tax: 129100,
      total: 1226450
    },
    {
      customer_id: 35,
      order_date: "2024-08-08T20:54:50.000Z",
      subtotal: 2067000,
      discount: 310050,
      sale_tax: 206700,
      total: 1963650
    },
    {
      customer_id: 15,
      order_date: "2024-03-23T21:14:04.000Z",
      subtotal: 3399000,
      discount: 509850,
      sale_tax: 339900,
      total: 3229050
    },
    {
      customer_id: 29,
      order_date: "2024-11-04T03:35:10.000Z",
      subtotal: 2657000,
      discount: 398550,
      sale_tax: 265700,
      total: 2524150
    },
    {
      customer_id: 6,
      order_date: "2024-01-12T14:33:28.000Z",
      subtotal: 48000,
      discount: 7200,
      sale_tax: 4800,
      total: 45600
    },
    {
      customer_id: 32,
      order_date: "2024-05-24T07:17:43.000Z",
      subtotal: 1715000,
      discount: 257250,
      sale_tax: 171500,
      total: 1629250
    },
    {
      customer_id: 6,
      order_date: "2024-02-01T03:46:12.000Z",
      subtotal: 891000,
      discount: 133650,
      sale_tax: 89100,
      total: 846450
    },
    {
      customer_id: 5,
      order_date: "2024-11-12T15:36:14.000Z",
      subtotal: 2876000,
      discount: 431400,
      sale_tax: 287600,
      total: 2732200
    },
    {
      customer_id: 23,
      order_date: "2024-10-01T03:29:09.000Z",
      subtotal: 298000,
      discount: 44700,
      sale_tax: 29800,
      total: 283100
    },
    {
      customer_id: 21,
      order_date: "2024-09-20T23:16:12.000Z",
      subtotal: 175000,
      discount: 26250,
      sale_tax: 17500,
      total: 166250
    },
    {
      customer_id: 34,
      order_date: "2024-03-14T05:55:35.000Z",
      subtotal: 1473000,
      discount: 220950,
      sale_tax: 147300,
      total: 1399350
    },
    {
      customer_id: 13,
      order_date: "2024-10-29T05:33:50.000Z",
      subtotal: 568000,
      discount: 85200,
      sale_tax: 56800,
      total: 539600
    },
    {
      customer_id: 3,
      order_date: "2024-11-29T04:49:32.000Z",
      subtotal: 644000,
      discount: 96600,
      sale_tax: 64400,
      total: 611800
    },
    {
      customer_id: 25,
      order_date: "2024-05-20T19:04:25.000Z",
      subtotal: 4424000,
      discount: 663600,
      sale_tax: 442400,
      total: 4202800
    },
    {
      customer_id: 16,
      order_date: "2024-07-26T23:07:11.000Z",
      subtotal: 2829000,
      discount: 424350,
      sale_tax: 282900,
      total: 2687550
    },
    {
      customer_id: 31,
      order_date: "2024-07-01T13:09:34.000Z",
      subtotal: 1214000,
      discount: 182100,
      sale_tax: 121400,
      total: 1153300
    },
    {
      customer_id: 7,
      order_date: "2024-10-05T08:14:07.000Z",
      subtotal: 2490000,
      discount: 373500,
      sale_tax: 249000,
      total: 2365500
    },
    {
      customer_id: 25,
      order_date: "2024-06-14T11:54:23.000Z",
      subtotal: 3580000,
      discount: 537000,
      sale_tax: 358000,
      total: 3401000
    },
    {
      customer_id: 33,
      order_date: "2024-09-21T15:43:45.000Z",
      subtotal: 1235000,
      discount: 185250,
      sale_tax: 123500,
      total: 1173250
    },
    {
      customer_id: 22,
      order_date: "2024-07-19T15:41:46.000Z",
      subtotal: 3082000,
      discount: 462300,
      sale_tax: 308200,
      total: 2927900
    },
    {
      customer_id: 12,
      order_date: "2024-11-23T11:58:53.000Z",
      subtotal: 4987000,
      discount: 748050,
      sale_tax: 498700,
      total: 4737650
    },
    {
      customer_id: 45,
      order_date: "2024-11-26T19:48:21.000Z",
      subtotal: 680000,
      discount: 102000,
      sale_tax: 68000,
      total: 646000
    },
    {
      customer_id: 5,
      order_date: "2024-06-24T17:57:56.000Z",
      subtotal: 1347000,
      discount: 202050,
      sale_tax: 134700,
      total: 1279650
    },
    {
      customer_id: 19,
      order_date: "2024-07-08T07:12:10.000Z",
      subtotal: 3253000,
      discount: 487950,
      sale_tax: 325300,
      total: 3090350
    },
    {
      customer_id: 49,
      order_date: "2024-09-12T17:17:34.000Z",
      subtotal: 4242000,
      discount: 636300,
      sale_tax: 424200,
      total: 4029900
    },
    {
      customer_id: 31,
      order_date: "2024-05-17T18:49:53.000Z",
      subtotal: 541000,
      discount: 81150,
      sale_tax: 54100,
      total: 513950
    },
    {
      customer_id: 14,
      order_date: "2024-11-08T03:01:46.000Z",
      subtotal: 2809000,
      discount: 421350,
      sale_tax: 280900,
      total: 2668550
    },
    {
      customer_id: 47,
      order_date: "2024-05-16T09:28:01.000Z",
      subtotal: 1829000,
      discount: 274350,
      sale_tax: 182900,
      total: 1737550
    },
    {
      customer_id: 35,
      order_date: "2024-06-04T21:08:26.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 4,
      order_date: "2024-12-04T00:06:21.000Z",
      subtotal: 4598000,
      discount: 689700,
      sale_tax: 459800,
      total: 4368100
    },
    {
      customer_id: 14,
      order_date: "2024-07-29T17:04:42.000Z",
      subtotal: 419000,
      discount: 62850,
      sale_tax: 41900,
      total: 398050
    },
    {
      customer_id: 29,
      order_date: "2024-07-06T10:50:30.000Z",
      subtotal: 2309000,
      discount: 346350,
      sale_tax: 230900,
      total: 2193550
    },
    {
      customer_id: 20,
      order_date: "2024-01-01T04:55:20.000Z",
      subtotal: 897000,
      discount: 134550,
      sale_tax: 89700,
      total: 852150
    },
    {
      customer_id: 9,
      order_date: "2024-10-15T21:49:07.000Z",
      subtotal: 1637000,
      discount: 245550,
      sale_tax: 163700,
      total: 1555150
    },
    {
      customer_id: 8,
      order_date: "2024-09-08T05:58:24.000Z",
      subtotal: 2450000,
      discount: 367500,
      sale_tax: 245000,
      total: 2327500
    },
    {
      customer_id: 27,
      order_date: "2024-09-27T15:55:20.000Z",
      subtotal: 2599000,
      discount: 389850,
      sale_tax: 259900,
      total: 2469050
    },
    {
      customer_id: 46,
      order_date: "2024-12-02T06:08:39.000Z",
      subtotal: 1176000,
      discount: 176400,
      sale_tax: 117600,
      total: 1117200
    },
    {
      customer_id: 12,
      order_date: "2024-10-20T10:08:01.000Z",
      subtotal: 4065000,
      discount: 609750,
      sale_tax: 406500,
      total: 3861750
    },
    {
      customer_id: 2,
      order_date: "2024-03-07T00:02:37.000Z",
      subtotal: 816000,
      discount: 122400,
      sale_tax: 81600,
      total: 775200
    },
    {
      customer_id: 43,
      order_date: "2024-05-07T23:20:58.000Z",
      subtotal: 3779000,
      discount: 566850,
      sale_tax: 377900,
      total: 3590050
    },
    {
      customer_id: 40,
      order_date: "2024-10-28T05:23:22.000Z",
      subtotal: 936000,
      discount: 140400,
      sale_tax: 93600,
      total: 889200
    },
    {
      customer_id: 6,
      order_date: "2024-02-28T22:45:35.000Z",
      subtotal: 633000,
      discount: 94950,
      sale_tax: 63300,
      total: 601350
    },
    {
      customer_id: 22,
      order_date: "2024-11-19T18:00:39.000Z",
      subtotal: 1790000,
      discount: 268500,
      sale_tax: 179000,
      total: 1700500
    },
    {
      customer_id: 21,
      order_date: "2024-06-15T21:14:00.000Z",
      subtotal: 533000,
      discount: 79950,
      sale_tax: 53300,
      total: 506350
    },
    {
      customer_id: 42,
      order_date: "2024-04-11T00:19:52.000Z",
      subtotal: 2447000,
      discount: 367050,
      sale_tax: 244700,
      total: 2324650
    },
    {
      customer_id: 28,
      order_date: "2024-08-10T00:33:37.000Z",
      subtotal: 1126000,
      discount: 168900,
      sale_tax: 112600,
      total: 1069700
    },
    {
      customer_id: 48,
      order_date: "2024-10-16T08:44:36.000Z",
      subtotal: 256000,
      discount: 38400,
      sale_tax: 25600,
      total: 243200
    },
    {
      customer_id: 44,
      order_date: "2024-04-28T01:00:17.000Z",
      subtotal: 507000,
      discount: 76050,
      sale_tax: 50700,
      total: 481650
    },
    {
      customer_id: 48,
      order_date: "2024-05-26T22:26:27.000Z",
      subtotal: 1122000,
      discount: 168300,
      sale_tax: 112200,
      total: 1065900
    },
    {
      customer_id: 29,
      order_date: "2024-03-27T17:21:20.000Z",
      subtotal: 2433000,
      discount: 364950,
      sale_tax: 243300,
      total: 2311350
    },
    {
      customer_id: 36,
      order_date: "2024-12-14T16:57:53.000Z",
      subtotal: 567000,
      discount: 85050,
      sale_tax: 56700,
      total: 538650
    },
    {
      customer_id: 30,
      order_date: "2024-03-19T20:36:00.000Z",
      subtotal: 2385000,
      discount: 357750,
      sale_tax: 238500,
      total: 2265750
    },
    {
      customer_id: 20,
      order_date: "2024-11-27T19:58:18.000Z",
      subtotal: 169000,
      discount: 25350,
      sale_tax: 16900,
      total: 160550
    },
    {
      customer_id: 25,
      order_date: "2024-02-23T05:44:45.000Z",
      subtotal: 2331000,
      discount: 349650,
      sale_tax: 233100,
      total: 2214450
    },
    {
      customer_id: 47,
      order_date: "2024-01-18T14:15:16.000Z",
      subtotal: 1937000,
      discount: 290550,
      sale_tax: 193700,
      total: 1840150
    },
    {
      customer_id: 47,
      order_date: "2024-08-08T22:40:10.000Z",
      subtotal: 1837000,
      discount: 275550,
      sale_tax: 183700,
      total: 1745150
    },
    {
      customer_id: 9,
      order_date: "2024-05-19T23:50:37.000Z",
      subtotal: 1143000,
      discount: 171450,
      sale_tax: 114300,
      total: 1085850
    },
    {
      customer_id: 32,
      order_date: "2024-07-06T20:23:48.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 20,
      order_date: "2024-02-08T18:38:05.000Z",
      subtotal: 2703000,
      discount: 405450,
      sale_tax: 270300,
      total: 2567850
    },
    {
      customer_id: 18,
      order_date: "2024-03-05T05:27:12.000Z",
      subtotal: 478000,
      discount: 71700,
      sale_tax: 47800,
      total: 454100
    },
    {
      customer_id: 38,
      order_date: "2024-05-22T21:47:37.000Z",
      subtotal: 2468000,
      discount: 370200,
      sale_tax: 246800,
      total: 2344600
    },
    {
      customer_id: 2,
      order_date: "2024-01-06T15:47:54.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 10,
      order_date: "2024-05-11T08:32:49.000Z",
      subtotal: 1548000,
      discount: 232200,
      sale_tax: 154800,
      total: 1470600
    },
    {
      customer_id: 37,
      order_date: "2024-03-10T03:35:05.000Z",
      subtotal: 980000,
      discount: 147000,
      sale_tax: 98000,
      total: 931000
    },
    {
      customer_id: 37,
      order_date: "2024-06-26T22:33:24.000Z",
      subtotal: 1026000,
      discount: 153900,
      sale_tax: 102600,
      total: 974700
    },
    {
      customer_id: 29,
      order_date: "2024-07-22T17:34:10.000Z",
      subtotal: 3366000,
      discount: 504900,
      sale_tax: 336600,
      total: 3197700
    },
    {
      customer_id: 35,
      order_date: "2024-08-30T05:22:11.000Z",
      subtotal: 2689000,
      discount: 403350,
      sale_tax: 268900,
      total: 2554550
    },
    {
      customer_id: 15,
      order_date: "2024-06-24T19:20:52.000Z",
      subtotal: 793000,
      discount: 118950,
      sale_tax: 79300,
      total: 753350
    },
    {
      customer_id: 7,
      order_date: "2024-08-24T20:31:32.000Z",
      subtotal: 4018000,
      discount: 602700,
      sale_tax: 401800,
      total: 3817100
    },
    {
      customer_id: 16,
      order_date: "2024-10-28T14:02:00.000Z",
      subtotal: 350000,
      discount: 52500,
      sale_tax: 35000,
      total: 332500
    },
    {
      customer_id: 48,
      order_date: "2024-08-23T00:10:35.000Z",
      subtotal: 970000,
      discount: 145500,
      sale_tax: 97000,
      total: 921500
    },
    {
      customer_id: 4,
      order_date: "2024-11-09T14:45:36.000Z",
      subtotal: 322000,
      discount: 48300,
      sale_tax: 32200,
      total: 305900
    },
    {
      customer_id: 36,
      order_date: "2024-05-27T07:44:12.000Z",
      subtotal: 4833000,
      discount: 724950,
      sale_tax: 483300,
      total: 4591350
    },
    {
      customer_id: 29,
      order_date: "2024-10-28T23:14:39.000Z",
      subtotal: 1336000,
      discount: 200400,
      sale_tax: 133600,
      total: 1269200
    },
    {
      customer_id: 13,
      order_date: "2024-12-13T10:39:52.000Z",
      subtotal: 1196000,
      discount: 179400,
      sale_tax: 119600,
      total: 1136200
    },
    {
      customer_id: 23,
      order_date: "2024-01-31T07:39:05.000Z",
      subtotal: 1307000,
      discount: 196050,
      sale_tax: 130700,
      total: 1241650
    },
    {
      customer_id: 31,
      order_date: "2024-12-28T16:37:04.000Z",
      subtotal: 507000,
      discount: 76050,
      sale_tax: 50700,
      total: 481650
    },
    {
      customer_id: 45,
      order_date: "2024-04-29T22:39:28.000Z",
      subtotal: 324000,
      discount: 48600,
      sale_tax: 32400,
      total: 307800
    },
    {
      customer_id: 26,
      order_date: "2024-10-26T08:16:07.000Z",
      subtotal: 1900000,
      discount: 285000,
      sale_tax: 190000,
      total: 1805000
    },
    {
      customer_id: 12,
      order_date: "2024-01-31T20:06:37.000Z",
      subtotal: 1824000,
      discount: 273600,
      sale_tax: 182400,
      total: 1732800
    },
    {
      customer_id: 23,
      order_date: "2024-01-15T03:53:20.000Z",
      subtotal: 4037000,
      discount: 605550,
      sale_tax: 403700,
      total: 3835150
    },
    {
      customer_id: 16,
      order_date: "2024-05-13T11:45:49.000Z",
      subtotal: 452000,
      discount: 67800,
      sale_tax: 45200,
      total: 429400
    },
    {
      customer_id: 16,
      order_date: "2024-07-22T06:05:00.000Z",
      subtotal: 2552000,
      discount: 382800,
      sale_tax: 255200,
      total: 2424400
    },
    {
      customer_id: 42,
      order_date: "2024-11-27T18:01:57.000Z",
      subtotal: 1364000,
      discount: 204600,
      sale_tax: 136400,
      total: 1295800
    },
    {
      customer_id: 45,
      order_date: "2024-03-05T13:34:40.000Z",
      subtotal: 2031000,
      discount: 304650,
      sale_tax: 203100,
      total: 1929450
    },
    {
      customer_id: 33,
      order_date: "2024-08-17T22:33:35.000Z",
      subtotal: 276000,
      discount: 41400,
      sale_tax: 27600,
      total: 262200
    },
    {
      customer_id: 48,
      order_date: "2024-03-08T10:06:38.000Z",
      subtotal: 4329000,
      discount: 649350,
      sale_tax: 432900,
      total: 4112550
    },
    {
      customer_id: 20,
      order_date: "2024-01-11T22:53:23.000Z",
      subtotal: 1636000,
      discount: 245400,
      sale_tax: 163600,
      total: 1554200
    },
    {
      customer_id: 36,
      order_date: "2024-06-19T17:53:05.000Z",
      subtotal: 2574000,
      discount: 386100,
      sale_tax: 257400,
      total: 2445300
    },
    {
      customer_id: 10,
      order_date: "2024-03-22T00:34:57.000Z",
      subtotal: 659000,
      discount: 98850,
      sale_tax: 65900,
      total: 626050
    },
    {
      customer_id: 40,
      order_date: "2024-07-15T16:06:31.000Z",
      subtotal: 1314000,
      discount: 197100,
      sale_tax: 131400,
      total: 1248300
    },
    {
      customer_id: 29,
      order_date: "2024-09-15T16:32:45.000Z",
      subtotal: 2636000,
      discount: 395400,
      sale_tax: 263600,
      total: 2504200
    },
    {
      customer_id: 32,
      order_date: "2024-12-12T17:52:58.000Z",
      subtotal: 1936000,
      discount: 290400,
      sale_tax: 193600,
      total: 1839200
    },
    {
      customer_id: 41,
      order_date: "2024-07-01T00:31:56.000Z",
      subtotal: 2091000,
      discount: 313650,
      sale_tax: 209100,
      total: 1986450
    },
    {
      customer_id: 10,
      order_date: "2024-10-23T14:16:28.000Z",
      subtotal: 1828000,
      discount: 274200,
      sale_tax: 182800,
      total: 1736600
    },
    {
      customer_id: 26,
      order_date: "2024-03-10T21:31:58.000Z",
      subtotal: 4292000,
      discount: 643800,
      sale_tax: 429200,
      total: 4077400
    },
    {
      customer_id: 26,
      order_date: "2024-11-18T08:27:16.000Z",
      subtotal: 2822000,
      discount: 423300,
      sale_tax: 282200,
      total: 2680900
    },
    {
      customer_id: 45,
      order_date: "2024-11-24T09:42:33.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 12,
      order_date: "2024-05-26T05:01:06.000Z",
      subtotal: 973000,
      discount: 145950,
      sale_tax: 97300,
      total: 924350
    },
    {
      customer_id: 17,
      order_date: "2024-06-27T08:08:56.000Z",
      subtotal: 2475000,
      discount: 371250,
      sale_tax: 247500,
      total: 2351250
    },
    {
      customer_id: 44,
      order_date: "2024-06-23T09:35:11.000Z",
      subtotal: 1700000,
      discount: 255000,
      sale_tax: 170000,
      total: 1615000
    },
    {
      customer_id: 44,
      order_date: "2024-04-13T10:14:14.000Z",
      subtotal: 1796000,
      discount: 269400,
      sale_tax: 179600,
      total: 1706200
    },
    {
      customer_id: 38,
      order_date: "2024-08-21T14:51:04.000Z",
      subtotal: 2339000,
      discount: 350850,
      sale_tax: 233900,
      total: 2222050
    },
    {
      customer_id: 36,
      order_date: "2024-01-02T13:18:53.000Z",
      subtotal: 2126000,
      discount: 318900,
      sale_tax: 212600,
      total: 2019700
    },
    {
      customer_id: 1,
      order_date: "2024-10-28T04:46:47.000Z",
      subtotal: 2711000,
      discount: 406650,
      sale_tax: 271100,
      total: 2575450
    },
    {
      customer_id: 27,
      order_date: "2024-10-20T21:04:22.000Z",
      subtotal: 2494000,
      discount: 374100,
      sale_tax: 249400,
      total: 2369300
    },
    {
      customer_id: 4,
      order_date: "2024-12-24T00:44:00.000Z",
      subtotal: 4695000,
      discount: 704250,
      sale_tax: 469500,
      total: 4460250
    },
    {
      customer_id: 17,
      order_date: "2024-03-26T14:02:32.000Z",
      subtotal: 980000,
      discount: 147000,
      sale_tax: 98000,
      total: 931000
    },
    {
      customer_id: 42,
      order_date: "2024-07-19T09:46:08.000Z",
      subtotal: 1990000,
      discount: 298500,
      sale_tax: 199000,
      total: 1890500
    },
    {
      customer_id: 26,
      order_date: "2024-04-30T13:33:54.000Z",
      subtotal: 4273000,
      discount: 640950,
      sale_tax: 427300,
      total: 4059350
    },
    {
      customer_id: 46,
      order_date: "2024-08-04T01:36:58.000Z",
      subtotal: 1357000,
      discount: 203550,
      sale_tax: 135700,
      total: 1289150
    },
    {
      customer_id: 3,
      order_date: "2024-02-08T11:19:08.000Z",
      subtotal: 3317000,
      discount: 497550,
      sale_tax: 331700,
      total: 3151150
    },
    {
      customer_id: 14,
      order_date: "2024-01-20T15:15:01.000Z",
      subtotal: 2608000,
      discount: 391200,
      sale_tax: 260800,
      total: 2477600
    },
    {
      customer_id: 43,
      order_date: "2024-10-03T08:56:52.000Z",
      subtotal: 150000,
      discount: 22500,
      sale_tax: 15000,
      total: 142500
    },
    {
      customer_id: 3,
      order_date: "2024-01-16T06:25:42.000Z",
      subtotal: 2579000,
      discount: 386850,
      sale_tax: 257900,
      total: 2450050
    },
    {
      customer_id: 37,
      order_date: "2024-07-14T04:54:15.000Z",
      subtotal: 1671000,
      discount: 250650,
      sale_tax: 167100,
      total: 1587450
    },
    {
      customer_id: 5,
      order_date: "2024-05-06T00:48:45.000Z",
      subtotal: 1124000,
      discount: 168600,
      sale_tax: 112400,
      total: 1067800
    },
    {
      customer_id: 8,
      order_date: "2024-06-18T10:46:39.000Z",
      subtotal: 157000,
      discount: 23550,
      sale_tax: 15700,
      total: 149150
    },
    {
      customer_id: 39,
      order_date: "2024-04-13T22:07:15.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 38,
      order_date: "2024-10-27T11:57:10.000Z",
      subtotal: 2479000,
      discount: 371850,
      sale_tax: 247900,
      total: 2355050
    },
    {
      customer_id: 5,
      order_date: "2024-07-10T07:35:40.000Z",
      subtotal: 1778000,
      discount: 266700,
      sale_tax: 177800,
      total: 1689100
    },
    {
      customer_id: 6,
      order_date: "2024-02-22T06:47:32.000Z",
      subtotal: 1437000,
      discount: 215550,
      sale_tax: 143700,
      total: 1365150
    },
    {
      customer_id: 4,
      order_date: "2024-07-30T14:16:53.000Z",
      subtotal: 444000,
      discount: 66600,
      sale_tax: 44400,
      total: 421800
    },
    {
      customer_id: 17,
      order_date: "2024-10-09T22:03:28.000Z",
      subtotal: 676000,
      discount: 101400,
      sale_tax: 67600,
      total: 642200
    },
    {
      customer_id: 20,
      order_date: "2024-10-22T21:17:27.000Z",
      subtotal: 661000,
      discount: 99150,
      sale_tax: 66100,
      total: 627950
    },
    {
      customer_id: 36,
      order_date: "2024-09-07T05:52:53.000Z",
      subtotal: 1076000,
      discount: 161400,
      sale_tax: 107600,
      total: 1022200
    },
    {
      customer_id: 5,
      order_date: "2024-08-28T17:28:47.000Z",
      subtotal: 2590000,
      discount: 388500,
      sale_tax: 259000,
      total: 2460500
    },
    {
      customer_id: 18,
      order_date: "2024-01-27T06:16:16.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 35,
      order_date: "2024-02-14T15:25:33.000Z",
      subtotal: 706000,
      discount: 105900,
      sale_tax: 70600,
      total: 670700
    },
    {
      customer_id: 33,
      order_date: "2024-12-27T05:41:35.000Z",
      subtotal: 1186000,
      discount: 177900,
      sale_tax: 118600,
      total: 1126700
    },
    {
      customer_id: 28,
      order_date: "2024-10-29T21:29:55.000Z",
      subtotal: 2464000,
      discount: 369600,
      sale_tax: 246400,
      total: 2340800
    },
    {
      customer_id: 2,
      order_date: "2024-01-08T09:13:16.000Z",
      subtotal: 2417000,
      discount: 362550,
      sale_tax: 241700,
      total: 2296150
    },
    {
      customer_id: 36,
      order_date: "2024-12-15T08:04:28.000Z",
      subtotal: 806000,
      discount: 120900,
      sale_tax: 80600,
      total: 765700
    },
    {
      customer_id: 1,
      order_date: "2024-06-27T12:51:49.000Z",
      subtotal: 644000,
      discount: 96600,
      sale_tax: 64400,
      total: 611800
    },
    {
      customer_id: 28,
      order_date: "2024-08-27T22:21:33.000Z",
      subtotal: 324000,
      discount: 48600,
      sale_tax: 32400,
      total: 307800
    },
    {
      customer_id: 42,
      order_date: "2024-07-03T22:01:34.000Z",
      subtotal: 2927000,
      discount: 439050,
      sale_tax: 292700,
      total: 2780650
    },
    {
      customer_id: 17,
      order_date: "2024-12-28T14:28:55.000Z",
      subtotal: 100000,
      discount: 15000,
      sale_tax: 10000,
      total: 95000
    },
    {
      customer_id: 46,
      order_date: "2024-11-18T10:42:32.000Z",
      subtotal: 3989000,
      discount: 598350,
      sale_tax: 398900,
      total: 3789550
    },
    {
      customer_id: 34,
      order_date: "2024-05-14T21:54:13.000Z",
      subtotal: 435000,
      discount: 65250,
      sale_tax: 43500,
      total: 413250
    },
    {
      customer_id: 29,
      order_date: "2024-05-07T05:30:27.000Z",
      subtotal: 798000,
      discount: 119700,
      sale_tax: 79800,
      total: 758100
    },
    {
      customer_id: 44,
      order_date: "2024-11-14T01:16:23.000Z",
      subtotal: 3594000,
      discount: 539100,
      sale_tax: 359400,
      total: 3414300
    },
    {
      customer_id: 36,
      order_date: "2024-10-13T13:33:15.000Z",
      subtotal: 322000,
      discount: 48300,
      sale_tax: 32200,
      total: 305900
    },
    {
      customer_id: 17,
      order_date: "2024-04-02T13:24:25.000Z",
      subtotal: 2607000,
      discount: 391050,
      sale_tax: 260700,
      total: 2476650
    },
    {
      customer_id: 2,
      order_date: "2024-02-29T04:55:23.000Z",
      subtotal: 603000,
      discount: 90450,
      sale_tax: 60300,
      total: 572850
    },
    {
      customer_id: 26,
      order_date: "2024-10-29T15:44:00.000Z",
      subtotal: 994000,
      discount: 149100,
      sale_tax: 99400,
      total: 944300
    },
    {
      customer_id: 19,
      order_date: "2023-12-31T19:22:00.000Z",
      subtotal: 1828000,
      discount: 274200,
      sale_tax: 182800,
      total: 1736600
    },
    {
      customer_id: 16,
      order_date: "2024-07-17T19:49:52.000Z",
      subtotal: 687000,
      discount: 103050,
      sale_tax: 68700,
      total: 652650
    },
    {
      customer_id: 19,
      order_date: "2024-11-30T14:36:19.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 49,
      order_date: "2024-12-02T21:31:30.000Z",
      subtotal: 760000,
      discount: 114000,
      sale_tax: 76000,
      total: 722000
    },
    {
      customer_id: 27,
      order_date: "2024-04-23T11:12:49.000Z",
      subtotal: 1391000,
      discount: 208650,
      sale_tax: 139100,
      total: 1321450
    },
    {
      customer_id: 43,
      order_date: "2024-01-03T10:24:10.000Z",
      subtotal: 980000,
      discount: 147000,
      sale_tax: 98000,
      total: 931000
    },
    {
      customer_id: 11,
      order_date: "2024-05-24T11:20:19.000Z",
      subtotal: 2682000,
      discount: 402300,
      sale_tax: 268200,
      total: 2547900
    },
    {
      customer_id: 49,
      order_date: "2024-06-29T05:14:54.000Z",
      subtotal: 2377000,
      discount: 356550,
      sale_tax: 237700,
      total: 2258150
    },
    {
      customer_id: 2,
      order_date: "2024-02-14T11:55:43.000Z",
      subtotal: 3409000,
      discount: 511350,
      sale_tax: 340900,
      total: 3238550
    },
    {
      customer_id: 41,
      order_date: "2024-07-29T16:44:33.000Z",
      subtotal: 3543000,
      discount: 531450,
      sale_tax: 354300,
      total: 3365850
    },
    {
      customer_id: 19,
      order_date: "2024-07-31T08:09:13.000Z",
      subtotal: 2714000,
      discount: 407100,
      sale_tax: 271400,
      total: 2578300
    },
    {
      customer_id: 11,
      order_date: "2024-06-06T14:38:12.000Z",
      subtotal: 1093000,
      discount: 163950,
      sale_tax: 109300,
      total: 1038350
    },
    {
      customer_id: 18,
      order_date: "2024-11-10T11:55:07.000Z",
      subtotal: 2403000,
      discount: 360450,
      sale_tax: 240300,
      total: 2282850
    },
    {
      customer_id: 14,
      order_date: "2024-11-03T16:41:47.000Z",
      subtotal: 1247000,
      discount: 187050,
      sale_tax: 124700,
      total: 1184650
    },
    {
      customer_id: 35,
      order_date: "2024-02-03T08:15:55.000Z",
      subtotal: 2102000,
      discount: 315300,
      sale_tax: 210200,
      total: 1996900
    },
    {
      customer_id: 15,
      order_date: "2024-06-27T21:09:17.000Z",
      subtotal: 2113000,
      discount: 316950,
      sale_tax: 211300,
      total: 2007350
    },
    {
      customer_id: 41,
      order_date: "2024-04-11T11:51:08.000Z",
      subtotal: 1302000,
      discount: 195300,
      sale_tax: 130200,
      total: 1236900
    },
    {
      customer_id: 18,
      order_date: "2024-11-19T20:05:47.000Z",
      subtotal: 1098000,
      discount: 164700,
      sale_tax: 109800,
      total: 1043100
    },
    {
      customer_id: 17,
      order_date: "2024-02-29T15:27:30.000Z",
      subtotal: 239000,
      discount: 35850,
      sale_tax: 23900,
      total: 227050
    },
    {
      customer_id: 21,
      order_date: "2024-07-31T01:42:12.000Z",
      subtotal: 828000,
      discount: 124200,
      sale_tax: 82800,
      total: 786600
    },
    {
      customer_id: 49,
      order_date: "2024-07-04T04:44:06.000Z",
      subtotal: 5592000,
      discount: 838800,
      sale_tax: 559200,
      total: 5312400
    },
    {
      customer_id: 46,
      order_date: "2024-03-13T06:13:24.000Z",
      subtotal: 495000,
      discount: 74250,
      sale_tax: 49500,
      total: 470250
    },
    {
      customer_id: 34,
      order_date: "2024-09-26T07:31:39.000Z",
      subtotal: 507000,
      discount: 76050,
      sale_tax: 50700,
      total: 481650
    },
    {
      customer_id: 34,
      order_date: "2024-12-09T11:34:26.000Z",
      subtotal: 734000,
      discount: 110100,
      sale_tax: 73400,
      total: 697300
    },
    {
      customer_id: 40,
      order_date: "2024-08-16T12:57:02.000Z",
      subtotal: 48000,
      discount: 7200,
      sale_tax: 4800,
      total: 45600
    },
    {
      customer_id: 15,
      order_date: "2024-07-22T13:55:13.000Z",
      subtotal: 1711000,
      discount: 256650,
      sale_tax: 171100,
      total: 1625450
    },
    {
      customer_id: 49,
      order_date: "2024-06-22T17:44:52.000Z",
      subtotal: 687000,
      discount: 103050,
      sale_tax: 68700,
      total: 652650
    },
    {
      customer_id: 11,
      order_date: "2024-11-30T00:19:55.000Z",
      subtotal: 169000,
      discount: 25350,
      sale_tax: 16900,
      total: 160550
    },
    {
      customer_id: 3,
      order_date: "2024-10-18T11:20:46.000Z",
      subtotal: 1755000,
      discount: 263250,
      sale_tax: 175500,
      total: 1667250
    },
    {
      customer_id: 33,
      order_date: "2024-06-11T03:30:20.000Z",
      subtotal: 2794000,
      discount: 419100,
      sale_tax: 279400,
      total: 2654300
    },
    {
      customer_id: 45,
      order_date: "2024-11-23T09:36:49.000Z",
      subtotal: 1444000,
      discount: 216600,
      sale_tax: 144400,
      total: 1371800
    },
    {
      customer_id: 46,
      order_date: "2024-03-11T10:19:40.000Z",
      subtotal: 1846000,
      discount: 276900,
      sale_tax: 184600,
      total: 1753700
    },
    {
      customer_id: 3,
      order_date: "2024-09-30T22:45:25.000Z",
      subtotal: 698000,
      discount: 104700,
      sale_tax: 69800,
      total: 663100
    },
    {
      customer_id: 9,
      order_date: "2024-11-26T00:14:33.000Z",
      subtotal: 889000,
      discount: 133350,
      sale_tax: 88900,
      total: 844550
    },
    {
      customer_id: 28,
      order_date: "2024-09-27T20:21:23.000Z",
      subtotal: 358000,
      discount: 53700,
      sale_tax: 35800,
      total: 340100
    },
    {
      customer_id: 4,
      order_date: "2024-01-21T06:31:13.000Z",
      subtotal: 1873000,
      discount: 280950,
      sale_tax: 187300,
      total: 1779350
    },
    {
      customer_id: 1,
      order_date: "2024-02-07T14:09:06.000Z",
      subtotal: 2819000,
      discount: 422850,
      sale_tax: 281900,
      total: 2678050
    },
    {
      customer_id: 34,
      order_date: "2024-06-13T22:48:52.000Z",
      subtotal: 729000,
      discount: 109350,
      sale_tax: 72900,
      total: 692550
    },
    {
      customer_id: 15,
      order_date: "2024-02-11T18:18:33.000Z",
      subtotal: 1252000,
      discount: 187800,
      sale_tax: 125200,
      total: 1189400
    },
    {
      customer_id: 24,
      order_date: "2024-03-16T12:14:02.000Z",
      subtotal: 998000,
      discount: 149700,
      sale_tax: 99800,
      total: 948100
    },
    {
      customer_id: 22,
      order_date: "2024-08-11T11:54:02.000Z",
      subtotal: 1247000,
      discount: 187050,
      sale_tax: 124700,
      total: 1184650
    },
    {
      customer_id: 5,
      order_date: "2024-04-27T00:20:06.000Z",
      subtotal: 324000,
      discount: 48600,
      sale_tax: 32400,
      total: 307800
    },
    {
      customer_id: 7,
      order_date: "2024-08-15T17:53:43.000Z",
      subtotal: 2334000,
      discount: 350100,
      sale_tax: 233400,
      total: 2217300
    },
    {
      customer_id: 8,
      order_date: "2024-11-02T01:14:14.000Z",
      subtotal: 2120000,
      discount: 318000,
      sale_tax: 212000,
      total: 2014000
    },
    {
      customer_id: 15,
      order_date: "2024-05-18T14:30:04.000Z",
      subtotal: 1325000,
      discount: 198750,
      sale_tax: 132500,
      total: 1258750
    },
    {
      customer_id: 24,
      order_date: "2024-12-19T08:48:14.000Z",
      subtotal: 882000,
      discount: 132300,
      sale_tax: 88200,
      total: 837900
    },
    {
      customer_id: 16,
      order_date: "2024-04-24T17:41:38.000Z",
      subtotal: 4016000,
      discount: 602400,
      sale_tax: 401600,
      total: 3815200
    },
    {
      customer_id: 37,
      order_date: "2024-09-26T13:15:21.000Z",
      subtotal: 1420000,
      discount: 213000,
      sale_tax: 142000,
      total: 1349000
    },
    {
      customer_id: 6,
      order_date: "2024-10-20T14:37:41.000Z",
      subtotal: 2503000,
      discount: 375450,
      sale_tax: 250300,
      total: 2377850
    },
    {
      customer_id: 19,
      order_date: "2024-09-28T01:44:24.000Z",
      subtotal: 1134000,
      discount: 170100,
      sale_tax: 113400,
      total: 1077300
    },
    {
      customer_id: 4,
      order_date: "2024-11-17T14:46:38.000Z",
      subtotal: 1097000,
      discount: 164550,
      sale_tax: 109700,
      total: 1042150
    },
    {
      customer_id: 34,
      order_date: "2024-05-14T23:51:49.000Z",
      subtotal: 1942000,
      discount: 291300,
      sale_tax: 194200,
      total: 1844900
    },
    {
      customer_id: 47,
      order_date: "2024-01-25T21:26:02.000Z",
      subtotal: 1380000,
      discount: 207000,
      sale_tax: 138000,
      total: 1311000
    },
    {
      customer_id: 26,
      order_date: "2024-04-08T09:46:28.000Z",
      subtotal: 2982000,
      discount: 447300,
      sale_tax: 298200,
      total: 2832900
    },
    {
      customer_id: 1,
      order_date: "2024-03-23T01:35:49.000Z",
      subtotal: 2119000,
      discount: 317850,
      sale_tax: 211900,
      total: 2013050
    },
    {
      customer_id: 34,
      order_date: "2024-08-17T21:02:30.000Z",
      subtotal: 1680000,
      discount: 252000,
      sale_tax: 168000,
      total: 1596000
    },
    {
      customer_id: 8,
      order_date: "2024-08-05T23:40:38.000Z",
      subtotal: 349000,
      discount: 52350,
      sale_tax: 34900,
      total: 331550
    },
    {
      customer_id: 18,
      order_date: "2024-10-13T04:32:02.000Z",
      subtotal: 2712000,
      discount: 406800,
      sale_tax: 271200,
      total: 2576400
    },
    {
      customer_id: 48,
      order_date: "2024-02-04T11:43:45.000Z",
      subtotal: 398000,
      discount: 59700,
      sale_tax: 39800,
      total: 378100
    },
    {
      customer_id: 11,
      order_date: "2024-04-17T16:06:52.000Z",
      subtotal: 865000,
      discount: 129750,
      sale_tax: 86500,
      total: 821750
    },
    {
      customer_id: 10,
      order_date: "2024-04-27T23:36:41.000Z",
      subtotal: 1070000,
      discount: 160500,
      sale_tax: 107000,
      total: 1016500
    },
    {
      customer_id: 41,
      order_date: "2024-11-10T05:31:31.000Z",
      subtotal: 2588000,
      discount: 388200,
      sale_tax: 258800,
      total: 2458600
    },
    {
      customer_id: 45,
      order_date: "2024-03-10T04:22:24.000Z",
      subtotal: 128000,
      discount: 19200,
      sale_tax: 12800,
      total: 121600
    },
    {
      customer_id: 23,
      order_date: "2024-05-01T23:33:10.000Z",
      subtotal: 1179000,
      discount: 176850,
      sale_tax: 117900,
      total: 1120050
    },
    {
      customer_id: 48,
      order_date: "2024-08-28T00:29:56.000Z",
      subtotal: 147000,
      discount: 22050,
      sale_tax: 14700,
      total: 139650
    },
    {
      customer_id: 5,
      order_date: "2024-08-29T01:35:18.000Z",
      subtotal: 916000,
      discount: 137400,
      sale_tax: 91600,
      total: 870200
    },
    {
      customer_id: 40,
      order_date: "2024-04-09T13:00:42.000Z",
      subtotal: 2265000,
      discount: 339750,
      sale_tax: 226500,
      total: 2151750
    },
    {
      customer_id: 11,
      order_date: "2024-01-31T07:05:23.000Z",
      subtotal: 394000,
      discount: 59100,
      sale_tax: 39400,
      total: 374300
    },
    {
      customer_id: 24,
      order_date: "2024-12-17T19:41:56.000Z",
      subtotal: 737000,
      discount: 110550,
      sale_tax: 73700,
      total: 700150
    },
    {
      customer_id: 3,
      order_date: "2024-08-06T04:11:12.000Z",
      subtotal: 2540000,
      discount: 381000,
      sale_tax: 254000,
      total: 2413000
    },
    {
      customer_id: 23,
      order_date: "2024-07-14T01:30:19.000Z",
      subtotal: 145000,
      discount: 21750,
      sale_tax: 14500,
      total: 137750
    },
    {
      customer_id: 27,
      order_date: "2024-05-02T18:45:42.000Z",
      subtotal: 495000,
      discount: 74250,
      sale_tax: 49500,
      total: 470250
    },
    {
      customer_id: 14,
      order_date: "2024-09-27T13:28:58.000Z",
      subtotal: 6349000,
      discount: 952350,
      sale_tax: 634900,
      total: 6031550
    },
    {
      customer_id: 47,
      order_date: "2024-10-29T16:29:57.000Z",
      subtotal: 1828000,
      discount: 274200,
      sale_tax: 182800,
      total: 1736600
    },
    {
      customer_id: 48,
      order_date: "2024-11-30T04:48:46.000Z",
      subtotal: 2469000,
      discount: 370350,
      sale_tax: 246900,
      total: 2345550
    },
    {
      customer_id: 40,
      order_date: "2024-02-06T12:45:55.000Z",
      subtotal: 237000,
      discount: 35550,
      sale_tax: 23700,
      total: 225150
    },
    {
      customer_id: 6,
      order_date: "2024-06-10T07:26:13.000Z",
      subtotal: 1116000,
      discount: 167400,
      sale_tax: 111600,
      total: 1060200
    },
    {
      customer_id: 29,
      order_date: "2024-07-25T19:55:14.000Z",
      subtotal: 1622000,
      discount: 243300,
      sale_tax: 162200,
      total: 1540900
    },
    {
      customer_id: 34,
      order_date: "2024-01-09T14:44:40.000Z",
      subtotal: 415000,
      discount: 62250,
      sale_tax: 41500,
      total: 394250
    },
    {
      customer_id: 49,
      order_date: "2024-02-23T13:23:21.000Z",
      subtotal: 1216000,
      discount: 182400,
      sale_tax: 121600,
      total: 1155200
    },
    {
      customer_id: 38,
      order_date: "2024-01-08T13:25:03.000Z",
      subtotal: 2060000,
      discount: 309000,
      sale_tax: 206000,
      total: 1957000
    },
    {
      customer_id: 28,
      order_date: "2024-05-31T16:32:36.000Z",
      subtotal: 1253000,
      discount: 187950,
      sale_tax: 125300,
      total: 1190350
    },
    {
      customer_id: 28,
      order_date: "2024-05-19T17:11:45.000Z",
      subtotal: 1998000,
      discount: 299700,
      sale_tax: 199800,
      total: 1898100
    },
    {
      customer_id: 9,
      order_date: "2024-02-27T07:48:11.000Z",
      subtotal: 1204000,
      discount: 180600,
      sale_tax: 120400,
      total: 1143800
    },
    {
      customer_id: 35,
      order_date: "2024-04-29T06:11:53.000Z",
      subtotal: 1496000,
      discount: 224400,
      sale_tax: 149600,
      total: 1421200
    },
    {
      customer_id: 2,
      order_date: "2024-10-21T16:07:57.000Z",
      subtotal: 2060000,
      discount: 309000,
      sale_tax: 206000,
      total: 1957000
    },
    {
      customer_id: 5,
      order_date: "2024-02-20T11:18:50.000Z",
      subtotal: 1684000,
      discount: 252600,
      sale_tax: 168400,
      total: 1599800
    },
    {
      customer_id: 48,
      order_date: "2024-05-30T12:48:08.000Z",
      subtotal: 3626000,
      discount: 543900,
      sale_tax: 362600,
      total: 3444700
    },
    {
      customer_id: 44,
      order_date: "2024-05-03T16:53:23.000Z",
      subtotal: 813000,
      discount: 121950,
      sale_tax: 81300,
      total: 772350
    },
    {
      customer_id: 13,
      order_date: "2024-08-28T07:02:36.000Z",
      subtotal: 2133000,
      discount: 319950,
      sale_tax: 213300,
      total: 2026350
    },
    {
      customer_id: 6,
      order_date: "2024-03-31T15:29:31.000Z",
      subtotal: 698000,
      discount: 104700,
      sale_tax: 69800,
      total: 663100
    },
    {
      customer_id: 33,
      order_date: "2024-05-27T19:38:19.000Z",
      subtotal: 2345000,
      discount: 351750,
      sale_tax: 234500,
      total: 2227750
    },
    {
      customer_id: 37,
      order_date: "2024-06-08T01:25:13.000Z",
      subtotal: 2204000,
      discount: 330600,
      sale_tax: 220400,
      total: 2093800
    },
    {
      customer_id: 31,
      order_date: "2024-08-26T21:33:43.000Z",
      subtotal: 447000,
      discount: 67050,
      sale_tax: 44700,
      total: 424650
    },
    {
      customer_id: 30,
      order_date: "2024-09-27T19:52:36.000Z",
      subtotal: 2187000,
      discount: 328050,
      sale_tax: 218700,
      total: 2077650
    },
    {
      customer_id: 28,
      order_date: "2024-01-05T07:26:32.000Z",
      subtotal: 1314000,
      discount: 197100,
      sale_tax: 131400,
      total: 1248300
    },
    {
      customer_id: 15,
      order_date: "2024-06-22T11:43:44.000Z",
      subtotal: 149000,
      discount: 22350,
      sale_tax: 14900,
      total: 141550
    },
    {
      customer_id: 29,
      order_date: "2024-10-07T04:31:46.000Z",
      subtotal: 2621000,
      discount: 393150,
      sale_tax: 262100,
      total: 2489950
    },
    {
      customer_id: 46,
      order_date: "2024-07-07T14:34:16.000Z",
      subtotal: 158000,
      discount: 23700,
      sale_tax: 15800,
      total: 150100
    },
    {
      customer_id: 33,
      order_date: "2024-05-13T01:29:33.000Z",
      subtotal: 2960000,
      discount: 444000,
      sale_tax: 296000,
      total: 2812000
    },
    {
      customer_id: 36,
      order_date: "2024-01-16T23:01:16.000Z",
      subtotal: 3389000,
      discount: 508350,
      sale_tax: 338900,
      total: 3219550
    },
    {
      customer_id: 32,
      order_date: "2024-04-15T04:28:32.000Z",
      subtotal: 2723000,
      discount: 408450,
      sale_tax: 272300,
      total: 2586850
    },
    {
      customer_id: 33,
      order_date: "2024-08-14T01:13:39.000Z",
      subtotal: 904000,
      discount: 135600,
      sale_tax: 90400,
      total: 858800
    },
    {
      customer_id: 28,
      order_date: "2024-11-09T01:00:32.000Z",
      subtotal: 1716000,
      discount: 257400,
      sale_tax: 171600,
      total: 1630200
    },
    {
      customer_id: 33,
      order_date: "2024-11-08T18:58:37.000Z",
      subtotal: 54000,
      discount: 8100,
      sale_tax: 5400,
      total: 51300
    },
    {
      customer_id: 15,
      order_date: "2024-11-06T23:33:40.000Z",
      subtotal: 2187000,
      discount: 328050,
      sale_tax: 218700,
      total: 2077650
    },
    {
      customer_id: 2,
      order_date: "2024-12-23T14:39:16.000Z",
      subtotal: 717000,
      discount: 107550,
      sale_tax: 71700,
      total: 681150
    },
    {
      customer_id: 25,
      order_date: "2024-09-17T16:50:45.000Z",
      subtotal: 919000,
      discount: 137850,
      sale_tax: 91900,
      total: 873050
    },
    {
      customer_id: 44,
      order_date: "2024-03-07T12:19:32.000Z",
      subtotal: 2119000,
      discount: 317850,
      sale_tax: 211900,
      total: 2013050
    },
    {
      customer_id: 29,
      order_date: "2024-07-28T05:50:21.000Z",
      subtotal: 294000,
      discount: 44100,
      sale_tax: 29400,
      total: 279300
    },
    {
      customer_id: 17,
      order_date: "2024-02-14T14:40:06.000Z",
      subtotal: 4024000,
      discount: 603600,
      sale_tax: 402400,
      total: 3822800
    },
    {
      customer_id: 29,
      order_date: "2024-09-09T10:20:55.000Z",
      subtotal: 1088000,
      discount: 163200,
      sale_tax: 108800,
      total: 1033600
    },
    {
      customer_id: 12,
      order_date: "2024-01-25T01:04:46.000Z",
      subtotal: 2608000,
      discount: 391200,
      sale_tax: 260800,
      total: 2477600
    },
    {
      customer_id: 20,
      order_date: "2024-11-23T08:20:55.000Z",
      subtotal: 826000,
      discount: 123900,
      sale_tax: 82600,
      total: 784700
    },
    {
      customer_id: 40,
      order_date: "2024-05-22T21:51:11.000Z",
      subtotal: 1312000,
      discount: 196800,
      sale_tax: 131200,
      total: 1246400
    },
    {
      customer_id: 7,
      order_date: "2024-10-19T23:35:34.000Z",
      subtotal: 1976000,
      discount: 296400,
      sale_tax: 197600,
      total: 1877200
    },
    {
      customer_id: 9,
      order_date: "2024-08-29T15:08:05.000Z",
      subtotal: 2039000,
      discount: 305850,
      sale_tax: 203900,
      total: 1937050
    },
    {
      customer_id: 20,
      order_date: "2024-07-10T00:53:18.000Z",
      subtotal: 384000,
      discount: 57600,
      sale_tax: 38400,
      total: 364800
    },
    {
      customer_id: 31,
      order_date: "2024-10-24T18:52:13.000Z",
      subtotal: 1310000,
      discount: 196500,
      sale_tax: 131000,
      total: 1244500
    },
    {
      customer_id: 38,
      order_date: "2024-05-13T18:53:27.000Z",
      subtotal: 2852000,
      discount: 427800,
      sale_tax: 285200,
      total: 2709400
    },
    {
      customer_id: 11,
      order_date: "2024-08-20T20:43:27.000Z",
      subtotal: 4193000,
      discount: 628950,
      sale_tax: 419300,
      total: 3983350
    },
    {
      customer_id: 13,
      order_date: "2024-01-07T09:19:29.000Z",
      subtotal: 2209000,
      discount: 331350,
      sale_tax: 220900,
      total: 2098550
    },
    {
      customer_id: 7,
      order_date: "2024-07-02T17:53:38.000Z",
      subtotal: 1095000,
      discount: 164250,
      sale_tax: 109500,
      total: 1040250
    },
    {
      customer_id: 26,
      order_date: "2024-03-22T22:46:58.000Z",
      subtotal: 2536000,
      discount: 380400,
      sale_tax: 253600,
      total: 2409200
    },
    {
      customer_id: 36,
      order_date: "2024-07-21T12:19:43.000Z",
      subtotal: 552000,
      discount: 82800,
      sale_tax: 55200,
      total: 524400
    },
    {
      customer_id: 43,
      order_date: "2024-08-29T17:44:58.000Z",
      subtotal: 1778000,
      discount: 266700,
      sale_tax: 177800,
      total: 1689100
    },
    {
      customer_id: 41,
      order_date: "2024-05-08T13:21:35.000Z",
      subtotal: 319000,
      discount: 47850,
      sale_tax: 31900,
      total: 303050
    },
    {
      customer_id: 44,
      order_date: "2024-10-10T10:11:44.000Z",
      subtotal: 2203000,
      discount: 330450,
      sale_tax: 220300,
      total: 2092850
    },
    {
      customer_id: 9,
      order_date: "2024-12-13T08:05:49.000Z",
      subtotal: 491000,
      discount: 73650,
      sale_tax: 49100,
      total: 466450
    },
    {
      customer_id: 37,
      order_date: "2024-12-14T15:57:40.000Z",
      subtotal: 507000,
      discount: 76050,
      sale_tax: 50700,
      total: 481650
    },
    {
      customer_id: 30,
      order_date: "2024-03-15T21:33:51.000Z",
      subtotal: 3316000,
      discount: 497400,
      sale_tax: 331600,
      total: 3150200
    },
    {
      customer_id: 3,
      order_date: "2024-03-26T03:16:41.000Z",
      subtotal: 3310000,
      discount: 496500,
      sale_tax: 331000,
      total: 3144500
    },
    {
      customer_id: 21,
      order_date: "2024-11-01T08:40:10.000Z",
      subtotal: 1622000,
      discount: 243300,
      sale_tax: 162200,
      total: 1540900
    },
    {
      customer_id: 27,
      order_date: "2024-09-22T13:07:36.000Z",
      subtotal: 2384000,
      discount: 357600,
      sale_tax: 238400,
      total: 2264800
    },
    {
      customer_id: 28,
      order_date: "2024-01-16T06:56:41.000Z",
      subtotal: 4074000,
      discount: 611100,
      sale_tax: 407400,
      total: 3870300
    },
    {
      customer_id: 8,
      order_date: "2024-12-24T20:19:34.000Z",
      subtotal: 297000,
      discount: 44550,
      sale_tax: 29700,
      total: 282150
    },
    {
      customer_id: 43,
      order_date: "2024-01-12T15:47:25.000Z",
      subtotal: 2529000,
      discount: 379350,
      sale_tax: 252900,
      total: 2402550
    },
    {
      customer_id: 48,
      order_date: "2024-07-03T11:13:56.000Z",
      subtotal: 149000,
      discount: 22350,
      sale_tax: 14900,
      total: 141550
    },
    {
      customer_id: 38,
      order_date: "2024-02-28T00:34:47.000Z",
      subtotal: 4908000,
      discount: 736200,
      sale_tax: 490800,
      total: 4662600
    },
    {
      customer_id: 34,
      order_date: "2024-07-26T12:19:05.000Z",
      subtotal: 367000,
      discount: 55050,
      sale_tax: 36700,
      total: 348650
    },
    {
      customer_id: 44,
      order_date: "2024-12-25T03:23:47.000Z",
      subtotal: 3535000,
      discount: 530250,
      sale_tax: 353500,
      total: 3358250
    },
    {
      customer_id: 34,
      order_date: "2024-05-23T08:25:41.000Z",
      subtotal: 1166000,
      discount: 174900,
      sale_tax: 116600,
      total: 1107700
    },
    {
      customer_id: 44,
      order_date: "2024-02-20T19:34:47.000Z",
      subtotal: 822000,
      discount: 123300,
      sale_tax: 82200,
      total: 780900
    },
    {
      customer_id: 18,
      order_date: "2024-10-09T17:12:17.000Z",
      subtotal: 590000,
      discount: 88500,
      sale_tax: 59000,
      total: 560500
    },
    {
      customer_id: 37,
      order_date: "2024-02-28T08:20:20.000Z",
      subtotal: 1203000,
      discount: 180450,
      sale_tax: 120300,
      total: 1142850
    },
    {
      customer_id: 14,
      order_date: "2024-09-19T12:10:13.000Z",
      subtotal: 791000,
      discount: 118650,
      sale_tax: 79100,
      total: 751450
    },
    {
      customer_id: 3,
      order_date: "2024-05-24T19:51:55.000Z",
      subtotal: 3460000,
      discount: 519000,
      sale_tax: 346000,
      total: 3287000
    },
    {
      customer_id: 1,
      order_date: "2024-04-22T23:32:42.000Z",
      subtotal: 3022000,
      discount: 453300,
      sale_tax: 302200,
      total: 2870900
    },
    {
      customer_id: 13,
      order_date: "2024-08-10T01:45:44.000Z",
      subtotal: 1711000,
      discount: 256650,
      sale_tax: 171100,
      total: 1625450
    },
    {
      customer_id: 19,
      order_date: "2024-03-15T21:12:45.000Z",
      subtotal: 1576000,
      discount: 236400,
      sale_tax: 157600,
      total: 1497200
    },
    {
      customer_id: 14,
      order_date: "2024-02-06T04:23:33.000Z",
      subtotal: 2455000,
      discount: 368250,
      sale_tax: 245500,
      total: 2332250
    },
    {
      customer_id: 8,
      order_date: "2024-11-19T05:24:43.000Z",
      subtotal: 1072000,
      discount: 160800,
      sale_tax: 107200,
      total: 1018400
    },
    {
      customer_id: 31,
      order_date: "2024-12-29T20:00:04.000Z",
      subtotal: 250000,
      discount: 37500,
      sale_tax: 25000,
      total: 237500
    },
    {
      customer_id: 48,
      order_date: "2024-12-17T17:42:28.000Z",
      subtotal: 256000,
      discount: 38400,
      sale_tax: 25600,
      total: 243200
    },
    {
      customer_id: 42,
      order_date: "2024-04-24T00:39:11.000Z",
      subtotal: 296000,
      discount: 44400,
      sale_tax: 29600,
      total: 281200
    },
    {
      customer_id: 13,
      order_date: "2024-03-07T06:02:00.000Z",
      subtotal: 3565000,
      discount: 534750,
      sale_tax: 356500,
      total: 3386750
    },
    {
      customer_id: 41,
      order_date: "2024-03-13T13:47:49.000Z",
      subtotal: 966000,
      discount: 144900,
      sale_tax: 96600,
      total: 917700
    },
    {
      customer_id: 5,
      order_date: "2024-04-01T13:51:03.000Z",
      subtotal: 1436000,
      discount: 215400,
      sale_tax: 143600,
      total: 1364200
    },
    {
      customer_id: 6,
      order_date: "2024-03-21T22:39:31.000Z",
      subtotal: 1075000,
      discount: 161250,
      sale_tax: 107500,
      total: 1021250
    },
    {
      customer_id: 4,
      order_date: "2024-11-27T20:15:31.000Z",
      subtotal: 1339000,
      discount: 200850,
      sale_tax: 133900,
      total: 1272050
    },
    {
      customer_id: 5,
      order_date: "2024-01-08T01:25:58.000Z",
      subtotal: 2354000,
      discount: 353100,
      sale_tax: 235400,
      total: 2236300
    },
    {
      customer_id: 35,
      order_date: "2024-12-07T07:28:04.000Z",
      subtotal: 2661000,
      discount: 399150,
      sale_tax: 266100,
      total: 2527950
    },
    {
      customer_id: 5,
      order_date: "2024-09-29T12:18:19.000Z",
      subtotal: 1008000,
      discount: 151200,
      sale_tax: 100800,
      total: 957600
    },
    {
      customer_id: 13,
      order_date: "2024-03-16T03:03:09.000Z",
      subtotal: 1265000,
      discount: 189750,
      sale_tax: 126500,
      total: 1201750
    },
    {
      customer_id: 17,
      order_date: "2024-10-30T20:07:55.000Z",
      subtotal: 1074000,
      discount: 161100,
      sale_tax: 107400,
      total: 1020300
    },
    {
      customer_id: 8,
      order_date: "2024-06-22T08:09:53.000Z",
      subtotal: 772000,
      discount: 115800,
      sale_tax: 77200,
      total: 733400
    },
    {
      customer_id: 32,
      order_date: "2024-01-06T16:53:49.000Z",
      subtotal: 1766000,
      discount: 264900,
      sale_tax: 176600,
      total: 1677700
    },
    {
      customer_id: 33,
      order_date: "2024-01-31T06:31:14.000Z",
      subtotal: 3305000,
      discount: 495750,
      sale_tax: 330500,
      total: 3139750
    },
    {
      customer_id: 2,
      order_date: "2024-03-18T17:22:53.000Z",
      subtotal: 2028000,
      discount: 304200,
      sale_tax: 202800,
      total: 1926600
    },
    {
      customer_id: 31,
      order_date: "2024-03-01T10:32:03.000Z",
      subtotal: 2120000,
      discount: 318000,
      sale_tax: 212000,
      total: 2014000
    },
    {
      customer_id: 41,
      order_date: "2024-05-05T12:57:21.000Z",
      subtotal: 24000,
      discount: 3600,
      sale_tax: 2400,
      total: 22800
    },
    {
      customer_id: 26,
      order_date: "2024-01-23T08:01:46.000Z",
      subtotal: 1497000,
      discount: 224550,
      sale_tax: 149700,
      total: 1422150
    },
    {
      customer_id: 16,
      order_date: "2024-12-25T15:09:30.000Z",
      subtotal: 740000,
      discount: 111000,
      sale_tax: 74000,
      total: 703000
    },
    {
      customer_id: 9,
      order_date: "2024-10-20T15:37:49.000Z",
      subtotal: 294000,
      discount: 44100,
      sale_tax: 29400,
      total: 279300
    },
    {
      customer_id: 29,
      order_date: "2024-09-15T10:45:43.000Z",
      subtotal: 2105000,
      discount: 315750,
      sale_tax: 210500,
      total: 1999750
    },
    {
      customer_id: 14,
      order_date: "2024-04-05T19:26:28.000Z",
      subtotal: 2832000,
      discount: 424800,
      sale_tax: 283200,
      total: 2690400
    },
    {
      customer_id: 1,
      order_date: "2024-12-06T11:48:28.000Z",
      subtotal: 1009000,
      discount: 151350,
      sale_tax: 100900,
      total: 958550
    },
    {
      customer_id: 37,
      order_date: "2024-12-26T07:14:02.000Z",
      subtotal: 2332000,
      discount: 349800,
      sale_tax: 233200,
      total: 2215400
    },
    {
      customer_id: 4,
      order_date: "2024-06-21T03:01:13.000Z",
      subtotal: 842000,
      discount: 126300,
      sale_tax: 84200,
      total: 799900
    },
    {
      customer_id: 5,
      order_date: "2024-01-22T09:50:25.000Z",
      subtotal: 2187000,
      discount: 328050,
      sale_tax: 218700,
      total: 2077650
    },
    {
      customer_id: 8,
      order_date: "2024-03-25T19:16:39.000Z",
      subtotal: 1778000,
      discount: 266700,
      sale_tax: 177800,
      total: 1689100
    },
    {
      customer_id: 32,
      order_date: "2024-08-30T19:02:02.000Z",
      subtotal: 2246000,
      discount: 336900,
      sale_tax: 224600,
      total: 2133700
    },
    {
      customer_id: 29,
      order_date: "2024-04-18T06:49:52.000Z",
      subtotal: 2542000,
      discount: 381300,
      sale_tax: 254200,
      total: 2414900
    },
    {
      customer_id: 39,
      order_date: "2024-11-25T03:29:47.000Z",
      subtotal: 1149000,
      discount: 172350,
      sale_tax: 114900,
      total: 1091550
    },
    {
      customer_id: 46,
      order_date: "2024-01-04T22:51:12.000Z",
      subtotal: 1183000,
      discount: 177450,
      sale_tax: 118300,
      total: 1123850
    },
    {
      customer_id: 42,
      order_date: "2024-10-15T20:21:51.000Z",
      subtotal: 3331000,
      discount: 499650,
      sale_tax: 333100,
      total: 3164450
    },
    {
      customer_id: 47,
      order_date: "2024-06-06T06:56:29.000Z",
      subtotal: 435000,
      discount: 65250,
      sale_tax: 43500,
      total: 413250
    },
    {
      customer_id: 46,
      order_date: "2024-09-11T23:27:31.000Z",
      subtotal: 1911000,
      discount: 286650,
      sale_tax: 191100,
      total: 1815450
    },
    {
      customer_id: 7,
      order_date: "2024-10-18T21:45:14.000Z",
      subtotal: 2404000,
      discount: 360600,
      sale_tax: 240400,
      total: 2283800
    },
    {
      customer_id: 10,
      order_date: "2024-02-20T23:58:57.000Z",
      subtotal: 2472000,
      discount: 370800,
      sale_tax: 247200,
      total: 2348400
    },
    {
      customer_id: 5,
      order_date: "2024-07-12T21:29:26.000Z",
      subtotal: 962000,
      discount: 144300,
      sale_tax: 96200,
      total: 913900
    },
    {
      customer_id: 21,
      order_date: "2024-11-08T00:23:34.000Z",
      subtotal: 2478000,
      discount: 371700,
      sale_tax: 247800,
      total: 2354100
    },
    {
      customer_id: 10,
      order_date: "2024-01-25T17:38:23.000Z",
      subtotal: 369000,
      discount: 55350,
      sale_tax: 36900,
      total: 350550
    },
    {
      customer_id: 29,
      order_date: "2024-05-15T15:50:04.000Z",
      subtotal: 1014000,
      discount: 152100,
      sale_tax: 101400,
      total: 963300
    },
    {
      customer_id: 2,
      order_date: "2024-03-25T22:02:32.000Z",
      subtotal: 250000,
      discount: 37500,
      sale_tax: 25000,
      total: 237500
    },
    {
      customer_id: 16,
      order_date: "2024-03-15T01:23:24.000Z",
      subtotal: 889000,
      discount: 133350,
      sale_tax: 88900,
      total: 844550
    },
    {
      customer_id: 20,
      order_date: "2024-01-19T19:46:50.000Z",
      subtotal: 3622000,
      discount: 543300,
      sale_tax: 362200,
      total: 3440900
    },
    {
      customer_id: 15,
      order_date: "2024-01-07T06:31:27.000Z",
      subtotal: 1754000,
      discount: 263100,
      sale_tax: 175400,
      total: 1666300
    },
    {
      customer_id: 26,
      order_date: "2024-04-12T22:43:40.000Z",
      subtotal: 3222000,
      discount: 483300,
      sale_tax: 322200,
      total: 3060900
    },
    {
      customer_id: 43,
      order_date: "2024-03-26T15:48:35.000Z",
      subtotal: 378000,
      discount: 56700,
      sale_tax: 37800,
      total: 359100
    },
    {
      customer_id: 19,
      order_date: "2024-04-07T06:27:37.000Z",
      subtotal: 2453000,
      discount: 367950,
      sale_tax: 245300,
      total: 2330350
    },
    {
      customer_id: 19,
      order_date: "2024-12-13T03:51:40.000Z",
      subtotal: 1777000,
      discount: 266550,
      sale_tax: 177700,
      total: 1688150
    },
    {
      customer_id: 30,
      order_date: "2024-09-16T07:28:58.000Z",
      subtotal: 209000,
      discount: 31350,
      sale_tax: 20900,
      total: 198550
    },
    {
      customer_id: 15,
      order_date: "2024-05-09T18:15:02.000Z",
      subtotal: 1204000,
      discount: 180600,
      sale_tax: 120400,
      total: 1143800
    },
    {
      customer_id: 48,
      order_date: "2024-06-25T08:06:26.000Z",
      subtotal: 2232000,
      discount: 334800,
      sale_tax: 223200,
      total: 2120400
    },
    {
      customer_id: 34,
      order_date: "2024-12-26T14:36:57.000Z",
      subtotal: 4488000,
      discount: 673200,
      sale_tax: 448800,
      total: 4263600
    },
    {
      customer_id: 40,
      order_date: "2024-01-02T20:47:55.000Z",
      subtotal: 1400000,
      discount: 210000,
      sale_tax: 140000,
      total: 1330000
    },
    {
      customer_id: 27,
      order_date: "2024-07-09T21:10:22.000Z",
      subtotal: 564000,
      discount: 84600,
      sale_tax: 56400,
      total: 535800
    },
    {
      customer_id: 27,
      order_date: "2024-02-15T23:34:36.000Z",
      subtotal: 3336000,
      discount: 500400,
      sale_tax: 333600,
      total: 3169200
    },
    {
      customer_id: 38,
      order_date: "2024-01-29T18:29:03.000Z",
      subtotal: 3473000,
      discount: 520950,
      sale_tax: 347300,
      total: 3299350
    },
    {
      customer_id: 21,
      order_date: "2024-08-24T03:28:13.000Z",
      subtotal: 2563000,
      discount: 384450,
      sale_tax: 256300,
      total: 2434850
    },
    {
      customer_id: 38,
      order_date: "2024-12-17T03:31:50.000Z",
      subtotal: 2648000,
      discount: 397200,
      sale_tax: 264800,
      total: 2515600
    },
    {
      customer_id: 17,
      order_date: "2024-02-25T17:39:31.000Z",
      subtotal: 756000,
      discount: 113400,
      sale_tax: 75600,
      total: 718200
    },
    {
      customer_id: 45,
      order_date: "2024-02-29T22:03:02.000Z",
      subtotal: 223000,
      discount: 33450,
      sale_tax: 22300,
      total: 211850
    },
    {
      customer_id: 31,
      order_date: "2024-10-06T03:56:27.000Z",
      subtotal: 966000,
      discount: 144900,
      sale_tax: 96600,
      total: 917700
    },
    {
      customer_id: 25,
      order_date: "2024-11-18T04:05:05.000Z",
      subtotal: 636000,
      discount: 95400,
      sale_tax: 63600,
      total: 604200
    },
    {
      customer_id: 10,
      order_date: "2024-02-26T19:50:08.000Z",
      subtotal: 2116000,
      discount: 317400,
      sale_tax: 211600,
      total: 2010200
    },
    {
      customer_id: 14,
      order_date: "2024-11-20T03:08:53.000Z",
      subtotal: 620000,
      discount: 93000,
      sale_tax: 62000,
      total: 589000
    },
    {
      customer_id: 37,
      order_date: "2024-11-26T00:30:35.000Z",
      subtotal: 980000,
      discount: 147000,
      sale_tax: 98000,
      total: 931000
    },
    {
      customer_id: 43,
      order_date: "2024-12-04T16:31:22.000Z",
      subtotal: 2125000,
      discount: 318750,
      sale_tax: 212500,
      total: 2018750
    },
    {
      customer_id: 29,
      order_date: "2024-11-05T22:29:38.000Z",
      subtotal: 384000,
      discount: 57600,
      sale_tax: 38400,
      total: 364800
    },
    {
      customer_id: 43,
      order_date: "2024-02-11T22:09:50.000Z",
      subtotal: 638000,
      discount: 95700,
      sale_tax: 63800,
      total: 606100
    },
    {
      customer_id: 37,
      order_date: "2024-08-21T03:23:09.000Z",
      subtotal: 99000,
      discount: 14850,
      sale_tax: 9900,
      total: 94050
    },
    {
      customer_id: 12,
      order_date: "2024-01-31T23:26:49.000Z",
      subtotal: 372000,
      discount: 55800,
      sale_tax: 37200,
      total: 353400
    },
    {
      customer_id: 22,
      order_date: "2024-09-29T23:18:53.000Z",
      subtotal: 3232000,
      discount: 484800,
      sale_tax: 323200,
      total: 3070400
    },
    {
      customer_id: 25,
      order_date: "2024-12-06T01:20:19.000Z",
      subtotal: 3308000,
      discount: 496200,
      sale_tax: 330800,
      total: 3142600
    },
    {
      customer_id: 32,
      order_date: "2024-02-28T23:35:07.000Z",
      subtotal: 933000,
      discount: 139950,
      sale_tax: 93300,
      total: 886350
    },
    {
      customer_id: 37,
      order_date: "2024-01-03T16:33:33.000Z",
      subtotal: 2849000,
      discount: 427350,
      sale_tax: 284900,
      total: 2706550
    },
    {
      customer_id: 3,
      order_date: "2024-02-08T21:04:56.000Z",
      subtotal: 2870000,
      discount: 430500,
      sale_tax: 287000,
      total: 2726500
    },
    {
      customer_id: 21,
      order_date: "2024-08-13T06:20:38.000Z",
      subtotal: 499000,
      discount: 74850,
      sale_tax: 49900,
      total: 474050
    },
    {
      customer_id: 38,
      order_date: "2024-07-12T07:08:39.000Z",
      subtotal: 469000,
      discount: 70350,
      sale_tax: 46900,
      total: 445550
    },
    {
      customer_id: 27,
      order_date: "2024-11-26T03:22:44.000Z",
      subtotal: 1221000,
      discount: 183150,
      sale_tax: 122100,
      total: 1159950
    },
    {
      customer_id: 20,
      order_date: "2024-02-13T13:11:24.000Z",
      subtotal: 960000,
      discount: 144000,
      sale_tax: 96000,
      total: 912000
    },
    {
      customer_id: 3,
      order_date: "2024-11-20T03:40:22.000Z",
      subtotal: 2661000,
      discount: 399150,
      sale_tax: 266100,
      total: 2527950
    },
    {
      customer_id: 22,
      order_date: "2024-11-11T21:52:42.000Z",
      subtotal: 633000,
      discount: 94950,
      sale_tax: 63300,
      total: 601350
    },
    {
      customer_id: 24,
      order_date: "2024-09-06T00:00:50.000Z",
      subtotal: 1628000,
      discount: 244200,
      sale_tax: 162800,
      total: 1546600
    },
    {
      customer_id: 24,
      order_date: "2024-02-19T18:49:41.000Z",
      subtotal: 189000,
      discount: 28350,
      sale_tax: 18900,
      total: 179550
    },
    {
      customer_id: 5,
      order_date: "2024-03-19T14:45:08.000Z",
      subtotal: 499000,
      discount: 74850,
      sale_tax: 49900,
      total: 474050
    },
    {
      customer_id: 3,
      order_date: "2024-01-02T09:56:50.000Z",
      subtotal: 2561000,
      discount: 384150,
      sale_tax: 256100,
      total: 2432950
    },
    {
      customer_id: 37,
      order_date: "2024-02-02T21:45:58.000Z",
      subtotal: 886000,
      discount: 132900,
      sale_tax: 88600,
      total: 841700
    },
    {
      customer_id: 10,
      order_date: "2024-06-05T04:52:57.000Z",
      subtotal: 441000,
      discount: 66150,
      sale_tax: 44100,
      total: 418950
    },
    {
      customer_id: 45,
      order_date: "2024-05-08T06:14:05.000Z",
      subtotal: 92000,
      discount: 13800,
      sale_tax: 9200,
      total: 87400
    },
    {
      customer_id: 10,
      order_date: "2024-11-15T09:58:05.000Z",
      subtotal: 2179000,
      discount: 326850,
      sale_tax: 217900,
      total: 2070050
    },
    {
      customer_id: 33,
      order_date: "2024-12-24T17:33:23.000Z",
      subtotal: 2085000,
      discount: 312750,
      sale_tax: 208500,
      total: 1980750
    },
    {
      customer_id: 38,
      order_date: "2024-06-12T04:01:42.000Z",
      subtotal: 3899000,
      discount: 584850,
      sale_tax: 389900,
      total: 3704050
    },
    {
      customer_id: 33,
      order_date: "2024-10-18T14:51:12.000Z",
      subtotal: 1745000,
      discount: 261750,
      sale_tax: 174500,
      total: 1657750
    },
    {
      customer_id: 31,
      order_date: "2024-03-26T15:37:16.000Z",
      subtotal: 2037000,
      discount: 305550,
      sale_tax: 203700,
      total: 1935150
    },
    {
      customer_id: 47,
      order_date: "2024-12-13T08:27:37.000Z",
      subtotal: 3543000,
      discount: 531450,
      sale_tax: 354300,
      total: 3365850
    },
    {
      customer_id: 43,
      order_date: "2024-03-15T13:48:56.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 21,
      order_date: "2024-05-09T14:09:19.000Z",
      subtotal: 2044000,
      discount: 306600,
      sale_tax: 204400,
      total: 1941800
    },
    {
      customer_id: 49,
      order_date: "2024-01-18T04:49:07.000Z",
      subtotal: 1777000,
      discount: 266550,
      sale_tax: 177700,
      total: 1688150
    },
    {
      customer_id: 26,
      order_date: "2024-04-09T18:21:09.000Z",
      subtotal: 2055000,
      discount: 308250,
      sale_tax: 205500,
      total: 1952250
    },
    {
      customer_id: 1,
      order_date: "2024-12-18T08:41:33.000Z",
      subtotal: 4950000,
      discount: 742500,
      sale_tax: 495000,
      total: 4702500
    },
    {
      customer_id: 40,
      order_date: "2024-07-19T10:31:57.000Z",
      subtotal: 1458000,
      discount: 218700,
      sale_tax: 145800,
      total: 1385100
    },
    {
      customer_id: 3,
      order_date: "2024-06-11T17:07:20.000Z",
      subtotal: 1778000,
      discount: 266700,
      sale_tax: 177800,
      total: 1689100
    },
    {
      customer_id: 28,
      order_date: "2024-11-16T11:31:00.000Z",
      subtotal: 2275000,
      discount: 341250,
      sale_tax: 227500,
      total: 2161250
    },
    {
      customer_id: 34,
      order_date: "2024-09-28T08:19:08.000Z",
      subtotal: 1524000,
      discount: 228600,
      sale_tax: 152400,
      total: 1447800
    },
    {
      customer_id: 39,
      order_date: "2024-10-30T14:32:35.000Z",
      subtotal: 1345000,
      discount: 201750,
      sale_tax: 134500,
      total: 1277750
    },
    {
      customer_id: 1,
      order_date: "2024-12-22T22:01:56.000Z",
      subtotal: 2189000,
      discount: 328350,
      sale_tax: 218900,
      total: 2079550
    },
    {
      customer_id: 12,
      order_date: "2024-02-18T19:53:24.000Z",
      subtotal: 717000,
      discount: 107550,
      sale_tax: 71700,
      total: 681150
    },
    {
      customer_id: 6,
      order_date: "2024-08-09T22:22:32.000Z",
      subtotal: 820000,
      discount: 123000,
      sale_tax: 82000,
      total: 779000
    },
    {
      customer_id: 14,
      order_date: "2024-05-04T22:02:25.000Z",
      subtotal: 816000,
      discount: 122400,
      sale_tax: 81600,
      total: 775200
    },
    {
      customer_id: 14,
      order_date: "2024-08-05T20:54:01.000Z",
      subtotal: 716000,
      discount: 107400,
      sale_tax: 71600,
      total: 680200
    },
    {
      customer_id: 15,
      order_date: "2024-03-06T20:17:13.000Z",
      subtotal: 738000,
      discount: 110700,
      sale_tax: 73800,
      total: 701100
    },
    {
      customer_id: 4,
      order_date: "2024-03-26T12:56:19.000Z",
      subtotal: 1745000,
      discount: 261750,
      sale_tax: 174500,
      total: 1657750
    },
    {
      customer_id: 17,
      order_date: "2024-01-01T14:58:15.000Z",
      subtotal: 672000,
      discount: 100800,
      sale_tax: 67200,
      total: 638400
    },
    {
      customer_id: 41,
      order_date: "2024-04-20T09:03:47.000Z",
      subtotal: 3919000,
      discount: 587850,
      sale_tax: 391900,
      total: 3723050
    },
    {
      customer_id: 28,
      order_date: "2024-06-03T13:04:02.000Z",
      subtotal: 3146000,
      discount: 471900,
      sale_tax: 314600,
      total: 2988700
    },
    {
      customer_id: 14,
      order_date: "2024-10-22T13:26:46.000Z",
      subtotal: 1522000,
      discount: 228300,
      sale_tax: 152200,
      total: 1445900
    },
    {
      customer_id: 10,
      order_date: "2024-01-19T14:54:37.000Z",
      subtotal: 2553000,
      discount: 382950,
      sale_tax: 255300,
      total: 2425350
    },
    {
      customer_id: 9,
      order_date: "2024-07-11T17:25:12.000Z",
      subtotal: 1592000,
      discount: 238800,
      sale_tax: 159200,
      total: 1512400
    },
    {
      customer_id: 12,
      order_date: "2024-02-14T10:02:42.000Z",
      subtotal: 1019000,
      discount: 152850,
      sale_tax: 101900,
      total: 968050
    },
    {
      customer_id: 4,
      order_date: "2024-08-30T12:43:11.000Z",
      subtotal: 375000,
      discount: 56250,
      sale_tax: 37500,
      total: 356250
    },
    {
      customer_id: 40,
      order_date: "2024-03-26T06:34:05.000Z",
      subtotal: 99000,
      discount: 14850,
      sale_tax: 9900,
      total: 94050
    },
    {
      customer_id: 15,
      order_date: "2024-08-14T11:05:24.000Z",
      subtotal: 1197000,
      discount: 179550,
      sale_tax: 119700,
      total: 1137150
    },
    {
      customer_id: 17,
      order_date: "2024-06-28T04:46:49.000Z",
      subtotal: 338000,
      discount: 50700,
      sale_tax: 33800,
      total: 321100
    },
    {
      customer_id: 30,
      order_date: "2024-04-12T09:26:30.000Z",
      subtotal: 3928000,
      discount: 589200,
      sale_tax: 392800,
      total: 3731600
    },
    {
      customer_id: 5,
      order_date: "2024-03-26T20:13:56.000Z",
      subtotal: 1970000,
      discount: 295500,
      sale_tax: 197000,
      total: 1871500
    },
    {
      customer_id: 45,
      order_date: "2024-10-21T04:16:26.000Z",
      subtotal: 527000,
      discount: 79050,
      sale_tax: 52700,
      total: 500650
    },
    {
      customer_id: 22,
      order_date: "2024-09-02T17:35:05.000Z",
      subtotal: 635000,
      discount: 95250,
      sale_tax: 63500,
      total: 603250
    },
    {
      customer_id: 34,
      order_date: "2024-05-31T07:03:34.000Z",
      subtotal: 525000,
      discount: 78750,
      sale_tax: 52500,
      total: 498750
    },
    {
      customer_id: 14,
      order_date: "2024-09-15T04:03:06.000Z",
      subtotal: 199000,
      discount: 29850,
      sale_tax: 19900,
      total: 189050
    },
    {
      customer_id: 14,
      order_date: "2024-07-27T12:13:37.000Z",
      subtotal: 5558000,
      discount: 833700,
      sale_tax: 555800,
      total: 5280100
    },
    {
      customer_id: 33,
      order_date: "2024-04-25T08:57:05.000Z",
      subtotal: 1746000,
      discount: 261900,
      sale_tax: 174600,
      total: 1658700
    },
    {
      customer_id: 15,
      order_date: "2024-03-30T15:57:11.000Z",
      subtotal: 1898000,
      discount: 284700,
      sale_tax: 189800,
      total: 1803100
    },
    {
      customer_id: 14,
      order_date: "2024-03-01T22:03:25.000Z",
      subtotal: 3170000,
      discount: 475500,
      sale_tax: 317000,
      total: 3011500
    },
    {
      customer_id: 37,
      order_date: "2024-12-26T15:56:23.000Z",
      subtotal: 298000,
      discount: 44700,
      sale_tax: 29800,
      total: 283100
    },
    {
      customer_id: 43,
      order_date: "2024-11-20T22:23:45.000Z",
      subtotal: 672000,
      discount: 100800,
      sale_tax: 67200,
      total: 638400
    },
    {
      customer_id: 15,
      order_date: "2024-01-30T05:33:51.000Z",
      subtotal: 4305000,
      discount: 645750,
      sale_tax: 430500,
      total: 4089750
    },
    {
      customer_id: 24,
      order_date: "2024-06-03T22:03:56.000Z",
      subtotal: 972000,
      discount: 145800,
      sale_tax: 97200,
      total: 923400
    },
    {
      customer_id: 33,
      order_date: "2024-01-02T09:52:23.000Z",
      subtotal: 3065000,
      discount: 459750,
      sale_tax: 306500,
      total: 2911750
    },
    {
      customer_id: 8,
      order_date: "2024-09-04T03:38:32.000Z",
      subtotal: 537000,
      discount: 80550,
      sale_tax: 53700,
      total: 510150
    },
    {
      customer_id: 2,
      order_date: "2024-06-09T17:02:18.000Z",
      subtotal: 1439000,
      discount: 215850,
      sale_tax: 143900,
      total: 1367050
    },
    {
      customer_id: 13,
      order_date: "2024-07-16T05:05:29.000Z",
      subtotal: 648000,
      discount: 97200,
      sale_tax: 64800,
      total: 615600
    },
    {
      customer_id: 48,
      order_date: "2024-03-29T18:57:16.000Z",
      subtotal: 2695000,
      discount: 404250,
      sale_tax: 269500,
      total: 2560250
    },
    {
      customer_id: 5,
      order_date: "2024-11-17T04:47:56.000Z",
      subtotal: 158000,
      discount: 23700,
      sale_tax: 15800,
      total: 150100
    },
    {
      customer_id: 35,
      order_date: "2024-04-13T22:34:24.000Z",
      subtotal: 1691000,
      discount: 253650,
      sale_tax: 169100,
      total: 1606450
    },
    {
      customer_id: 5,
      order_date: "2024-06-05T04:08:38.000Z",
      subtotal: 1225000,
      discount: 183750,
      sale_tax: 122500,
      total: 1163750
    },
    {
      customer_id: 24,
      order_date: "2024-07-11T12:11:06.000Z",
      subtotal: 79000,
      discount: 11850,
      sale_tax: 7900,
      total: 75050
    },
    {
      customer_id: 35,
      order_date: "2024-01-24T14:24:15.000Z",
      subtotal: 1640000,
      discount: 246000,
      sale_tax: 164000,
      total: 1558000
    },
    {
      customer_id: 45,
      order_date: "2024-08-28T16:51:09.000Z",
      subtotal: 1115000,
      discount: 167250,
      sale_tax: 111500,
      total: 1059250
    },
    {
      customer_id: 21,
      order_date: "2024-10-05T18:30:16.000Z",
      subtotal: 3306000,
      discount: 495900,
      sale_tax: 330600,
      total: 3140700
    },
    {
      customer_id: 42,
      order_date: "2024-08-17T21:11:18.000Z",
      subtotal: 1923000,
      discount: 288450,
      sale_tax: 192300,
      total: 1826850
    },
    {
      customer_id: 12,
      order_date: "2024-09-30T20:02:52.000Z",
      subtotal: 2990000,
      discount: 448500,
      sale_tax: 299000,
      total: 2840500
    },
    {
      customer_id: 27,
      order_date: "2024-12-26T20:20:31.000Z",
      subtotal: 1079000,
      discount: 161850,
      sale_tax: 107900,
      total: 1025050
    },
    {
      customer_id: 46,
      order_date: "2024-02-05T11:24:03.000Z",
      subtotal: 217000,
      discount: 32550,
      sale_tax: 21700,
      total: 206150
    },
    {
      customer_id: 12,
      order_date: "2024-12-07T21:39:47.000Z",
      subtotal: 3591000,
      discount: 538650,
      sale_tax: 359100,
      total: 3411450
    },
    {
      customer_id: 4,
      order_date: "2024-11-23T03:00:17.000Z",
      subtotal: 2282000,
      discount: 342300,
      sale_tax: 228200,
      total: 2167900
    },
    {
      customer_id: 38,
      order_date: "2024-08-04T11:27:55.000Z",
      subtotal: 2017000,
      discount: 302550,
      sale_tax: 201700,
      total: 1916150
    },
    {
      customer_id: 45,
      order_date: "2024-09-26T14:46:58.000Z",
      subtotal: 1522000,
      discount: 228300,
      sale_tax: 152200,
      total: 1445900
    },
    {
      customer_id: 21,
      order_date: "2024-07-29T00:01:16.000Z",
      subtotal: 2117000,
      discount: 317550,
      sale_tax: 211700,
      total: 2011150
    },
    {
      customer_id: 15,
      order_date: "2024-09-21T21:23:39.000Z",
      subtotal: 1025000,
      discount: 153750,
      sale_tax: 102500,
      total: 973750
    },
    {
      customer_id: 30,
      order_date: "2024-07-30T00:52:25.000Z",
      subtotal: 1022000,
      discount: 153300,
      sale_tax: 102200,
      total: 970900
    },
    {
      customer_id: 24,
      order_date: "2024-08-07T18:13:44.000Z",
      subtotal: 766000,
      discount: 114900,
      sale_tax: 76600,
      total: 727700
    },
    {
      customer_id: 20,
      order_date: "2024-07-19T14:12:39.000Z",
      subtotal: 1765000,
      discount: 264750,
      sale_tax: 176500,
      total: 1676750
    },
    {
      customer_id: 19,
      order_date: "2024-10-18T01:24:04.000Z",
      subtotal: 1999000,
      discount: 299850,
      sale_tax: 199900,
      total: 1899050
    },
    {
      customer_id: 8,
      order_date: "2024-02-20T19:15:22.000Z",
      subtotal: 3723000,
      discount: 558450,
      sale_tax: 372300,
      total: 3536850
    },
    {
      customer_id: 5,
      order_date: "2024-06-13T12:49:47.000Z",
      subtotal: 578000,
      discount: 86700,
      sale_tax: 57800,
      total: 549100
    },
    {
      customer_id: 16,
      order_date: "2024-03-09T22:03:35.000Z",
      subtotal: 1101000,
      discount: 165150,
      sale_tax: 110100,
      total: 1045950
    },
    {
      customer_id: 37,
      order_date: "2024-12-09T23:01:32.000Z",
      subtotal: 398000,
      discount: 59700,
      sale_tax: 39800,
      total: 378100
    },
    {
      customer_id: 48,
      order_date: "2024-06-09T11:52:51.000Z",
      subtotal: 704000,
      discount: 105600,
      sale_tax: 70400,
      total: 668800
    },
    {
      customer_id: 12,
      order_date: "2024-03-05T07:13:09.000Z",
      subtotal: 507000,
      discount: 76050,
      sale_tax: 50700,
      total: 481650
    },
    {
      customer_id: 19,
      order_date: "2024-10-10T13:55:47.000Z",
      subtotal: 2563000,
      discount: 384450,
      sale_tax: 256300,
      total: 2434850
    },
    {
      customer_id: 4,
      order_date: "2024-12-05T07:54:44.000Z",
      subtotal: 1784000,
      discount: 267600,
      sale_tax: 178400,
      total: 1694800
    },
    {
      customer_id: 19,
      order_date: "2024-07-15T10:20:11.000Z",
      subtotal: 1885000,
      discount: 282750,
      sale_tax: 188500,
      total: 1790750
    },
    {
      customer_id: 36,
      order_date: "2024-10-22T00:28:03.000Z",
      subtotal: 2040000,
      discount: 306000,
      sale_tax: 204000,
      total: 1938000
    },
    {
      customer_id: 13,
      order_date: "2024-10-01T17:13:17.000Z",
      subtotal: 2202000,
      discount: 330300,
      sale_tax: 220200,
      total: 2091900
    },
    {
      customer_id: 19,
      order_date: "2024-03-26T23:20:06.000Z",
      subtotal: 694000,
      discount: 104100,
      sale_tax: 69400,
      total: 659300
    },
    {
      customer_id: 28,
      order_date: "2024-05-05T14:07:08.000Z",
      subtotal: 2879000,
      discount: 431850,
      sale_tax: 287900,
      total: 2735050
    },
    {
      customer_id: 48,
      order_date: "2024-05-20T15:17:31.000Z",
      subtotal: 375000,
      discount: 56250,
      sale_tax: 37500,
      total: 356250
    },
    {
      customer_id: 40,
      order_date: "2024-06-30T12:16:09.000Z",
      subtotal: 490000,
      discount: 73500,
      sale_tax: 49000,
      total: 465500
    },
    {
      customer_id: null,
      order_date: "2024-12-30T19:56:29.752Z",
      subtotal: 324000,
      discount: 48600,
      sale_tax: 32400,
      total: 307800
    }
  ])
}