const { Router } = require('express')

const router = Router();

const { MongoClient } = require("mongodb");

const clientPromise = MongoClient.connect("mongodb+srv://admin:1TSJuyceaJEf2h1g@vektorind.0zkpe.mongodb.net/test", {
  useUnifiedTopology: true,
});

/* GET users listing. */
// Запрос количества объектов в коллекциях
router.get('/pressure-regulators/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("pressure_regulators").find().count();
  res.send({count: newPromise});
});
router.get('/gate-valves/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("gate_valves").find().count();
  res.send({count: newPromise});
});
router.get('/ball-valves/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("ball_valves").find().count();
  res.send({count: newPromise});
});
router.get('/butterfly-valves-bilateral/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("butterfly_valves-bilateral").find().count();
  res.send({count: newPromise});
});
router.get('/butterfly-valves-unilateral/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("butterfly_valves-unilateral").find().count();
  res.send({count: newPromise});
});
router.get('/check-valves/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("check_valves").find().count();
  res.send({count: newPromise});
});
router.get('/control-valves/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("control_valves").find().count();
  res.send({count: newPromise});
});
router.get('/safety-valve-blocks/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("safety_valve_blocks").find().count();
  res.send({count: newPromise});
});
router.get('/safety-valves/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("safety_valves").find().count();
  res.send({count: newPromise});
});
router.get('/switching-devices/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("switching_devices").find().count();
  res.send({count: newPromise});
});
router.get('/shut-off-valves/count', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("shut-off_valves").find().count();
  res.send({count: newPromise});
});
// Запрос коллекций
router.get('/pressure-regulators', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("pressure_regulators").find({}).toArray();
  res.send(newPromise);
});
router.get('/gate-valves', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("gate_valves").find({}).toArray();
  res.send(newPromise);
});
router.get('/ball-valves', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("ball_valves").find({}).limit(5000).toArray();
  res.send(newPromise);
});
// router.get('/butterfly-valves', async function (req, res, next) {
//   const client = await clientPromise;
//   const bb = client.db("products");
//   const newPromise = await bb.collection("butterfly_valves").find({country: 'Россия'}).toArray();
//   res.send(newPromise);
// });

router.get('/butterfly-valves-bilateral', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("butterfly_valves-bilateral").find({}).toArray();
  res.send(newPromise);
});

router.get('/butterfly-valves-unilateral', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("butterfly_valves-unilateral").find({}).toArray();
  res.send(newPromise);
});
router.get('/check-valves', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("check_valves").find({}).toArray();
  res.send(newPromise);
});
router.get('/control-valves', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("control_valves").find({}).toArray();
  res.send(newPromise);
});
router.get('/safety-valve-blocks', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("safety_valve_blocks").find({}).toArray();
  res.send(newPromise);
});
router.get('/safety-valves', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("safety_valves").find({}).toArray();
  res.send(newPromise);
});
router.get('/switching-devices', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("switching_devices").find({}).toArray();
  res.send(newPromise);
});
router.get('/shut-off-valves', async function (req, res, next) {
  const client = await clientPromise;
  const bb = client.db("products");
  const newPromise = await bb.collection("shut-off_valves").find({}).toArray();
  res.send(newPromise);
});



module.exports = router
