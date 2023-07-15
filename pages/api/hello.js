// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}


export default async function hello(req, res) {
  // so slow!
  await delay(1000)
  res.status(200).json({ random: Math.random() })
}
