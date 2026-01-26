import { Suspense, useState } from 'react';

import { FOOTER_HEIGTH } from '@components/MainFooter/constants';
import MainPageLayout from '@components/MainPageLayout';
import Dark_Typography from '@components/ui/Dark_Typography';

import ActiveTicketsHeading from './ActiveTicketsHeading';
import ActiveTicketsList from './ActiveTicketsList';
import ClinicCardGenerator from './ClinicCardGenerator';
import ClinicChatbotTemporaryButton from './ClinicChatbotTemporaryButton';
import ClinicSkeleton from './ClinicSkeleton';
import useGetConfigAi from './__hooks__/useGetConfigAi';
import useGetData from './__hooks__/useGetData';

const ClinicContainer = () => {
  const { isLoading, data } = useGetData();
  const { aiConfigLoading, aiConfigData } = useGetConfigAi();
  const [paddingBottomValue, setPaddingBottomValue] = useState<number>(0);

  const showLoading = aiConfigLoading || isLoading;

  const onChangeValueHandler = (value: number) => {
    setPaddingBottomValue(value);
  };

  return (
    <>
      <Suspense>
        <MainPageLayout
          rightElement="Info"
          leftElement1="Profile"
          leftElement2="TicketsHistory"
          paddingBottom={FOOTER_HEIGTH + 16}
        >
          <div
            className="relative flex flex-col items-center gap-4 px-6 z-0"
            style={{ paddingBottom: paddingBottomValue }}
          >
            {showLoading && <ClinicSkeleton />}

            {!showLoading && (
              <>
                {data && (
                  <>
                    <ActiveTicketsHeading
                      tickets={data.tickets}
                      activeTicketsMore={data.activeTicketsMore}
                      activeTicketsOneTitle={data.activeTicketsOneTitle}
                    />

                    <Dark_Typography fontSize="Headline_Small" className="text-impo_Neutral_OnBackground">
                      {data.title}
                    </Dark_Typography>

                    {data.types.map((item, index) => (
                      <ClinicCardGenerator
                        key={index}
                        id={item.id}
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        priceUnit={item.priceUnit}
                        description={item.description}
                      />
                    ))}
                  </>
                )}

                {aiConfigData && aiConfigData.isAvailable && (
                  <ClinicChatbotTemporaryButton chatbot={aiConfigData} onChangeValueHandler={onChangeValueHandler} />
                )}
              </>
            )}
          </div>
        </MainPageLayout>

        <ActiveTicketsList tickets={data?.tickets} />
      </Suspense>
    </>
  );
};

export default ClinicContainer;
