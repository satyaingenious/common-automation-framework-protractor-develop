import {DemoEnglishConstant} from './demo.english.constant';
import {PageHelper} from '../../components/html/page-helper';

export class DemoGermanConstant extends DemoEnglishConstant implements DemoConstantContract {
    specificField = 'German';

    get randomLanguageName() {
        return `${this.specificField} ${PageHelper.getUniqueId()}`;
    }
}
