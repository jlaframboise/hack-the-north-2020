console.log("hello world");

const handsfree = new Handsfree({
    isClient: true,
    hands: true,
    assetsPath: 'handsfree/models'
});

console.log(handsfree);

handsfree.enablePlugins('browser')
handsfree.start()

// alert("Hello from content.js!")

// import handsfree from handsfree.js
  
// const handsfree = new Handsfree({hands: true})
// handsfree.enablePlugins('browser')
// handsfree.start()
