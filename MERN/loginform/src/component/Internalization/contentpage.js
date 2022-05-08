import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Text, Languages } from '../../Assets/constant';

const ContentPage = () => {
  const { t } = useTranslation();

  const eventHandler = (event) => {
    let newLanguage = event.target.value;
    i18next.changeLanguage(newLanguage);
  };
  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {Text.dropDownTitle}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {Languages.map(({ languageCode, languageName }) => (
            <li>
              <button type="button" onClick={eventHandler} value={languageCode} className="dropdown-item">
                {languageName}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <br />
      <div className="card">
        <h5 className="card-title">{t('Internationalization')}</h5>
        <div className="card-body">
          {t('definition_of_Internationalization')}
          {t('about_Internationalization')}
        </div>
      </div>
      <br/>
    </div>
  );
};

export default ContentPage;
