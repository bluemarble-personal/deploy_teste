const axios = require('axios');

async function main() {
  const msg = 'Teste Git granel'
  const url = `https://api.telegram.org/bot1221548327:AAHe6kWjxuly7W_uARM6giFIXsIxyk6CXI4/sendMessage?chat_id=1064217093&text=${msg}`
  const retorno = await axios.get(url)  
  console.log(retorno.data)
}

main()
