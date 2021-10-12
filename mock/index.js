module.exports = {
  "GET /api/mocks": (req,res) => {
    res.send({
      msg: 'mock msg'
    })
  }
}