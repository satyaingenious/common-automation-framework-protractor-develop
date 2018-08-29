import {DemoConstant} from '../../../globalization/language-constants/demo.constant';

describe('Globalization Test',
    () => {
        it('Globalization test', () => {
            console.log(DemoConstant.Instance.specificField);
            console.log(DemoConstant.Instance.commonField);
            console.log(DemoConstant.Instance.randomLanguageName);
            DemoConstant.Instance.printLanguageName();
        });
    }
);
