/* qwerty for future import { loadingActions } from '../../components/Loading/modules'; */
import { languagesActions } from '.';

export function setPlatformLanguageAction(lang:any) {
  return (dispatch:any) => {
    /* dispatch(loadingActions.show()); */
    dispatch(languagesActions.set(lang));

    /* setTimeout(() => {
      dispatch(loadingActions.hide());
    }, 1000); */
  };
}
