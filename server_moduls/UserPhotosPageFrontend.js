app.get("/photos/:id", function (req, res) {
    console.log('ekav'+' '+req.params.id);
    res.end();
});   
  