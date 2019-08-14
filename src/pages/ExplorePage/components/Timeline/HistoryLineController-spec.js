/*
 * Copyright (C) 2017-2018 Dremio Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { shallow } from 'enzyme';

import { HistoryLineController } from './HistoryLineController';

describe('HistoryLineController', () => {

  let minimalProps;
  let commonProps;
  beforeEach(() => {
    minimalProps = {
      location: {},
      dataset: Immutable.fromJS({
        tipVersion: '12345',
        datasetVersion: '12345'
      })
    };
    commonProps = {
      ...minimalProps
    };
  });

  it('should render with minimal props without exploding', () => {
    const wrapper = shallow(<HistoryLineController {...minimalProps}/>);
    expect(wrapper).to.have.length(1);
  });

  it('should render HistoryLine', () => {
    const wrapper = shallow(<HistoryLineController {...commonProps}/>);
    expect(wrapper.find('HistoryLine')).to.have.length(1);
    const props = wrapper.find('HistoryLine').first().props();
    expect(props.tipVersion).to.equal(commonProps.dataset.get('tipVersion'));
    expect(props.activeVersion).to.equal(commonProps.dataset.get('datasetVersion'));
  });
});
