var fs = require('fs');
var file = fs.createWriteStream('./sample/createWriteStream.txt', { flags: 'w' });
file.write('親譲りの無鉄砲で子供の時から損ばかりしている。');
file.write('小学校に居る時分学校の二階から飛び降りて一週間ほど腰を抜かした事がある。');
file.end('なぜそんな無茶をしたときく人があるかも知れぬ。');
