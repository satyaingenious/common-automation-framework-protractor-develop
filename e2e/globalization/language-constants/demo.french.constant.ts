import {DemoEnglishConstant} from './demo.english.constant';
import {PageHelper} from '../../components/html/page-helper';

export class DemoFrenchConstant extends DemoEnglishConstant implements DemoConstantContract {
    specificField = 'French';

    get randomLanguageName() {
        return `${this.specificField} ${PageHelper.getUniqueId()}`;
    }
}
