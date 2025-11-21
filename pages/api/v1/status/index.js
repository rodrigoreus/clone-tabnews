function status(request, response) {
  response
    .status(200)
    .json({ chave: "O clube de Regatas do Flamengo é o maior do mundo!" });
}

export default status;
