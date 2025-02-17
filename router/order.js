/*
 * @Author: BitCreate
 * @Date: 2024-04-02 11:51:12
 */
const express = require("express");
const router = express.Router();
const OrderController = require("../controller/OrderController.js");

// 查询课程是否购买接口
router.get("/query_pay", OrderController.query_pay);

// 查询课程是否最近购买动态接口
router.get("/latest", OrderController.latest);

// // 获取微信支付二维码
// router.post('/pay', OrderController.pay)

// // 微信支付回调
// router.post('/callback', OrderController.callback);

// // 轮询用户扫码与否
// router.get('/query_state', OrderController.query_state);

module.exports = router;
