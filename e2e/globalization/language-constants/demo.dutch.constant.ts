import {DemoEnglishConstant} from './demo.english.constant';
import {PageHelper} from '../../components/html/page-helper';

export class DemoDutchConstant extends DemoEnglishConstant implements DemoConstantContract {
    specificField = 'Dutch';

    get randomLanguageName() {
        return `${this.specificField} ${PageHelper.getUniqueId()}`;
    }
}
