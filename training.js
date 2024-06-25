

export function train(i) {
    let status = document.getElementById('status')

    const net = new brain.NeuralNetwork(
        {
            hiddenLayers: [10, 10, 10],
            iterations: 10000,
            learningRate: 0.1

        }
    )


    const trainingData = [
        { input: [10], output: [0] },  // 10°C, does not like ice cream
        { input: [20], output: [0] },  // 20°C, does not like ice cream
        { input: [30], output: [1] },  // 30°C, likes ice cream
        { input: [40], output: [1] },  // 40°C, likes ice cream
    ];


    net.train(trainingData)



    // let model = net.toJSON()

    // fs.writeFileSync('model,json', JSON.stringify(model))

    status.innerHTML = 'starting...'

    setTimeout(() => {
        let r = net.run([i])
        status.innerHTML = ` ${r[0] > 0.5 ? 'ice cream' : 'No ice cream'}`

    },1000)







}
