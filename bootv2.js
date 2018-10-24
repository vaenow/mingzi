var fs = require('fs');
var cheerio = require('cheerio')


// 所有的名句
let all = []
for (let i = 1; i <= 200; i++) {
	let $ = cheerio.load(fs.readFileSync(`pages/page${i}.html`), {
		decodeEntities: false
	});
	let oneLine = []
	$('.sons').eq(0).find('a').each((i, v) => {

		if (i !== 0 && i % 2 === 0) {
			all.push([...oneLine])
			oneLine = []
		}

		oneLine.push($(v).html())
	})
}

// 随机取名
for (let i = 0; i < 30; i++) {
	let line = all[random(0, all.length)]

	let linestart = random(0, line[0].length - 1)
	let name = line[0].slice(linestart, linestart + 2).replace(/，|。|、|？/, "")
	name.length > 1 && console.log(name, line)
}

// [start, end)
function random(start, end) {
	return Math.floor(Math.random() * end) + start
}