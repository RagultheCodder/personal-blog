import { useCallback, useContext, useEffect, useState } from 'react';
import FieldSet from '../../components/common/FieldSet';
import FormInput from '../../components/common/FormInput';
import TextArea from '../../components/common/TextArea';
import '../../scss/formInput.scss';
import Select from 'react-select';
import '../../scss/customRows.scss';
import { PatientContext } from '../../context/PatientContext';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import { martialStatus, yesOrNo } from '../../config/constant';
import countryData from 'country-locale-map';
import ISO6391 from 'iso-639-1';
import { SelectInter } from '../../interface/patientCareDetails.interface';

const Demographics = () => {
  const [countryList, setCountryList] = useState<SelectInter[]>([]);
  const [languageList, setLanguageList] = useState<SelectInter[]>([]);

  const loadCountryAndLanguage = useCallback(() => {
    setCountryList(
      countryData.getAllCountries().map((x) => ({
        label: x.name + ' ' + x.emoji,
        value: x.alpha2,
      })),
    );

    setLanguageList(
      ISO6391.getAllNames().map((y: string) => ({
        value: ISO6391.getCode(y),
        label: y + ' - ' + ISO6391.getCode(y).toUpperCase(),
      })),
    );
  }, []);

  useEffect(() => {
    loadCountryAndLanguage();
  }, [loadCountryAndLanguage]);

  const patientContext = useContext(PatientContext);

  return (
    <div>
      <FieldSet title="Patient Demographics">
        <div>
          <div className="row">
            <div className="col position-relative">
              <div className="custom-phone-input">
                <PhoneInput
                  country={'au'}
                  value={patientContext.patientDemographics.contactNumber ?? ''}
                  onChange={(phone) =>
                    patientContext.handlePhoneNumber(
                      'patientDemographics',
                      'contactNumber',
                      phone,
                    )
                  }
                  specialLabel="Contact Number"
                />
              </div>
              {patientContext.validator.current.message(
                'contactNumber',
                patientContext.patientDemographics.contactNumber,
                'required',
              )}
            </div>

            <div className="col position-relative">
              <div className="custom-phone-input">
                <PhoneInput
                  country={'au'}
                  value={
                    patientContext.patientDemographics.emergencyContact ?? ''
                  }
                  onChange={(phone) =>
                    patientContext.handlePhoneNumber(
                      'patientDemographics',
                      'emergencyContact',
                      phone,
                    )
                  }
                  specialLabel="Emergency Contact Number"
                />
              </div>
              {patientContext.validator.current.message(
                'emergencyContact',
                patientContext.patientDemographics.emergencyContact,
                'required',
              )}
            </div>
            <div className="col position-relative">
              <Select
                value={patientContext.patientDemographics.status}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    'patientDemographics',
                    'status',
                    e,
                  )
                }
                options={yesOrNo}
                className={'gender'}
                name="status"
                id="status"
              />
              <>
                <label className="label">
                  <div className="text">
                    Veteran and Australian Defence Force Status
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
              {patientContext.validator.current.message(
                'status',
                patientContext.patientDemographics.status.value,
                'required',
              )}
            </div>
          </div>
          <div className="row custom-top-margin">
            <div className="col position-relative">
              <Select
                value={patientContext.patientDemographics.country}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    'patientDemographics',
                    'country',
                    e,
                  )
                }
                options={countryList}
                className={'gender'}
                name="country"
                placeholder="Select"
                id="country"
              />
              <>
                <label className="label">
                  <div className="text">
                    Country of Birth
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
              {patientContext.validator.current.message(
                'country',
                patientContext.patientDemographics.country.value,
                'required',
              )}
            </div>
            <div className="col position-relative">
              <FormInput
                type="text"
                value={patientContext.patientDemographics.religion ?? ''}
                name="religion"
                onChange={(e) =>
                  patientContext.handleInput('patientDemographics', e)
                }
                className={`input-style ${
                  patientContext.patientDemographics.religion &&
                  'input-style-valid'
                }`}
                label="Religion "
                noLabel={false}
                id="religion"
                error={patientContext.validator.current.message(
                  'religion',
                  patientContext.patientDemographics.religion,
                  'required',
                )}
              />
            </div>
            <div className="col position-relative">
              <Select
                value={patientContext.patientDemographics.maritalStatus}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    'patientDemographics',
                    'maritalStatus',
                    e,
                  )
                }
                options={martialStatus}
                className={'gender'}
                name="maritalStatus"
                placeholder="Select"
                id="maritalStatus"
              />
              <>
                <label className="label">
                  <div className="text">
                    Marital status
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
              {patientContext.validator.current.message(
                'maritalStatus',
                patientContext.patientDemographics.maritalStatus.value,
                'required',
              )}
            </div>
          </div>

          <div className="row custom-top-margin">
            <div className="col-md-4 position-relative">
              <Select
                value={patientContext.patientDemographics.language}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    'patientDemographics',
                    'language',
                    e,
                  )
                }
                options={languageList}
                className={'gender'}
                name="language"
                placeholder="Select"
                id="language"
              />
              <>
                <label className="label">
                  <div className="text">
                    Language
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
              {patientContext.validator.current.message(
                'language',
                patientContext.patientDemographics.language.value,
                'required',
              )}
            </div>
            <div className="col-md-4 position-relative">
              <Select
                value={patientContext.patientDemographics.interpreter}
                onChange={(e) =>
                  patientContext.handleDropDown(
                    'patientDemographics',
                    'interpreter',
                    e,
                  )
                }
                options={yesOrNo}
                className={'gender'}
                name="interpreter"
                placeholder="Select"
                id="interpreter"
              />
              <>
                <label className="label">
                  <div className="text">
                    Interpreter Required
                    <span className="icon-style">*</span>
                  </div>
                </label>
              </>
              {patientContext.validator.current.message(
                'interpreter',
                patientContext.patientDemographics.interpreter.value,
                'required',
              )}
            </div>
          </div>
          <div className="row custom-top-margin">
            <div className="col position-relative">
              <TextArea
                type="text"
                value={patientContext.patientDemographics.socialHistory ?? ''}
                name="socialHistory"
                onChange={(e) =>
                  patientContext.handleInput('patientDemographics', e)
                }
                className={`large-input-style no-scroll ${
                  patientContext.patientDemographics.socialHistory &&
                  'large-input-style-valid no-scroll'
                }`}
                label="Social History "
                noLabel={false}
                id="socialHistory"
                error={patientContext.validator.current.message(
                  'socialHistory',
                  patientContext.patientDemographics.socialHistory,
                  'required',
                )}
              />
            </div>
          </div>

          <div className="row custom-top-margin">
            <div className="col position-relative">
              <TextArea
                type="text"
                value={patientContext.patientDemographics.familyHistory ?? ''}
                name="familyHistory"
                onChange={(e) =>
                  patientContext.handleInput('patientDemographics', e)
                }
                className={`large-input-style no-scroll ${
                  patientContext.patientDemographics.familyHistory &&
                  'large-input-style-valid no-scroll'
                }`}
                label="Family History "
                noLabel={false}
                id="familyHistory"
                error={patientContext.validator.current.message(
                  'familyHistory',
                  patientContext.patientDemographics.familyHistory,
                  'required',
                )}
              />
            </div>
          </div>
        </div>
      </FieldSet>
    </div>
  );
};

export default Demographics;
