let stocks = {
  Fruits: ["apple", "mango"],
  liquid: ["water ", "ice"],
  holder: ["cone", "cup", "stick"],
  toopings: ["chocolate", "peanuts "],
};
let is_shop_open = true;
function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout((resolve, ms));
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log("hello");
    console.log(`${stocks.Fruits[0]}`);
  } catch (error) {
    console.log("customer left ");
  } finally {
    console.log(" day ended ,shop is closed 1");
  }
}
kitchen();
