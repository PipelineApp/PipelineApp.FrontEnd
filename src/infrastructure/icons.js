import * as fontawesome from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const icons = {
	init: () => {
		fontawesome.library.add(faUser);
	}
};
export default icons;
