module.exports = function check(str, bracketsConfig) {
  // your solution
    var bkt = [];
    var i = 0;
            while (i < bracketsConfig.length)
    {
        bkt[i] = bracketsConfig[i].join("");
        i++;
    }
    var j;
    var k = str.length;
      while (i < k)
    {
        for (j = 0; j < bkt.length; j++)

        {
            if (str.indexOf(bkt[j]) >= 0)
            {
                str = str.slice(0, str.indexOf(bkt[j])) + str.slice(str.indexOf(bkt[j]) + 2);
            }

        }
        i++;
    }
    if (str.length >= 1)
    {
        return false;
    }

    return true;
}
