//   /lib/models/insModel.ts

import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const InsuranceSchema = new Schema({
  displayResidencyWidget: Boolean,
  responseId: String,
  residency: {
    countryCode: String,
    territory: String,
    userProvided: Boolean
  },
  locale: {
    primary: String,
    secondary: [String]
  },
  currencies: {
    pointOfSale: {
      code: String,
      exchangeRates: {
        toPointOfSaleCurrency: String,
        toRemittanceCurrency: String,
        toResidencyCurrency: String
      }
    },
    remittance: {
      code: String,
      exchangeRates: {
        toPointOfSaleCurrency: String,
        toRemittanceCurrency: String,
        toResidencyCurrency: String
      }
    },
    residency: {
      code: String,
      exchangeRates: {
        toPointOfSaleCurrency: String,
        toRemittanceCurrency: String,
        toResidencyCurrency: String
      }
    }
  },
  countrySelectionContent: {
    type: Map,
    of: {
      _id: false,
      countries: [
        {
          _id: false,
          name: String,
          code: String,
          regions: [
            {
              name: String,
              code: String
            }
          ],
          defaultLanguage: String
        }
      ]
    }
  },
  clientContext: {
    name: String,
    brandName: String,
    page: String,
    isBsaAgent: Boolean,
    isTAAPUser: Boolean,
    deviceCharacteristics: Schema.Types.Mixed
  },
  languageModuleContent: [
    {
      locale: String,
      language: String
    }
  ],
  tripComponents: [
    {
      entityId: String,
      lineOfBusiness: String,
      price: {
        amount: String,
        currencyCode: String
      }
    }
  ],
  templateInformation: [
    {
      name: String,
      weight: Number,
      displayContent: {
        type: Map,
        of: {
          _id: false,
          residencyBasedLocalesIncluded: Boolean,
          textContentMap: {
            type: Map,
            of: String
          }
        }
      },
      products: [
        {
          internalName: String,
          insuranceId: Number,
          Url: String,
          benefitSolicitationTemplateInformation: {
            templateName: String
          },
          displayContent: {
            prices: [
              {
                price: {
                  amount: String,
                  currencyCode: String
                }
              }
            ],
            localeBasedContent: {
              type: Map,
              of: {
                _id: false,
                benefitSolicitation: {
                  text: String,
                  subtext: [String],
                  weight: Number
                }
              }
            }
          }
        }
      ],
      subTemplates: [
        {
          name: String,
          weight: Number,
          displayContent: {
            type: Map,
            of: {
              _id: false,
              residencyBasedLocalesIncluded: Boolean,
              textContentMap: {
                type: Map,
                of: String
              }
            }
          },
          products: [
            {
              internalName: String,
              insuranceId: Number,
              Url: String,
              benefitSolicitationTemplateInformation: {
                templateName: String
              },
              displayContent: {
                prices: [
                  {
                    price: {
                      amount: String,
                      currencyCode: String
                    }
                  }
                ],
                localeBasedContent: {
                  type: Map,
                  of: {
                    _id: false,
                    benefitSolicitation: {
                      text: String,
                      subtext: [String],
                      weight: Number
                    }
                  }
                }
              }
            }
          ]
        }
      ]
    }
  ]
})