var should = require('chai').should(),
    latynka = require('../latynka'),
    table = require('../data/translate-table.json'),
    testList = {};

var testTransliterate = function testTransliterate(curTable, testList) {
  it('transliterateText', function() {
    for (var test in testList) {
      latynka.transliterateText(test, curTable).should.equal(testList[test]);
    }
  });
};

describe('Abecadło', function() {
  testList = {
    "Абецадло": "Abecadło",
    "землі": "zemli",
    "культурні": "kulturni",
    "для осмислення всього цього": "dla osmysłennia wsioho cioho",
    "м'ясо": "mjaso",
    "вважаю": "wważaju",
    "Як ся маєте дядьку": "Jak sia majete diaďku",
    "Діод": "Diöd",
    "Наморозь": "Namoroź",
    "Ховається": "Chowajeťsia",
  };
  testTransliterate(table["abecadlo"], testList);
});

describe('Hajevycja', function() {
  testList = {
    "Гаєвиця": "Hajevycja",
    "землі": "zemli",
    "культурні": "kuljturni",
    "для осмислення всього цього": "dlja osmyslennja vsjoho cjoho",
    "м'ясо": "m'jaso",
    "вважаю": "vvažaju",
    "Як ся маєте дядьку": "Jak sja majete djadjku",
    "Діод": "Diod",
    "Наморозь": "Namorozj",
    "Ховається": "Xovajetjsja",
  };
  testTransliterate(table["hajevycja"], testList);
});

describe('Jirečekivka', function() {
  testList = {
    "Їречеківка": "Jirečekivka",
    "землі": "zemli",
    "культурні": "kuľturni",
    "для осмислення всього цього": "dlia osmyslennia vsioho cioho",
    "м'ясо": "mjaso",
    "вважаю": "vvažaju",
    "Як ся маєте дядьку": "Jak sia majete diaďku",
    "Діод": "Diöd",
    "Наморозь": "Namoroź",
    "Ховається": "Chovajeťsia",
  };
  testTransliterate(table["jirechekivka"], testList);
});

describe('Lahodivka', function() {
  testList = {
    "Лагодівка": "Lahodivka",
    "землі": "zemli",
    "культурні": "kuľturni",
    "для осмислення всього цього": "dľa osmyslenńa vśoho ćoho",
    "м'ясо": "mjaso",
    "вважаю": "wažaju",
    "Як ся маєте дядьку": "Jak śa majete ďaďku",
    "Діод": "Díod",
    "Наморозь": "Namoroź",
    "Ховається": "Chovajeťśa",
  };
  testTransliterate(table["lahodivka"], testList);
});

describe('Lučukivka', function() {
  testList = {
    "Лучуківка": "Lučukivka",
    "землі": "zemli",
    "культурні": "kuľturni",
    "для осмислення всього цього": "dľa osmyslenńa vśoho ćoho",
    "м'ясо": "mjaso",
    "вважаю": "vvažaju",
    "Як ся маєте дядьку": "Jak śa majete ďaďku",
    "Діод": "Diod",
    "Наморозь": "Namoroź",
    "Ховається": "Xovajeťśa",
  };
  testTransliterate(table["luchukivka"], testList);
});

describe('TKPN', function() {
  testList = {
    "землі": "zemli",
    "культурні": "kuljturni",
    "для осмислення всього цього": "dlja osmyslennja vsjogho cjogho",
    "м'ясо": "m'jaso",
    "вважаю": "vvazhaju",
    "Як ся маєте дядьку": "Jak sja majete djadjku",
    "Діод": "Diod",
    "Наморозь": "Namorozj",
    "Ховається": "Khovajetjsja",
  };
  testTransliterate(table["tkpn"], testList);
});

