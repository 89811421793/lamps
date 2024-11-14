import React from 'react';

const steps = [
  {
    description: (
      <>
        Оформляете заявку в любой из форм на нашем сайте. Укажите телефон или адрес электронной почты для обратной связи. 
        <span className="font-bold"> Либо заявку можно оформить по телефону </span>
        <a href="tel:84952335557" className="underline font-bold text-darkgrey">8 495 233 55 57</a>
      </>
    ),
  },
  {
    description: "Менеджер оформляет заказ, вы согласовываете порядок доставки и оплаты с ним.",
  },
  {
    description: "Получаете изделие выбранным вами способом",
  },
];

const Steps = () => {
  return (
    <div className="flex mt-10">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-start relative mr-6"> 
          <div className="flex items-center">
            <div className="flex items-center justify-center w-[48px] h-[48px] rounded-full border border-[var(--secondary)] shadow-[0px_8px_10px_0px_#FFC94F40]">
              <span className="text-[16px] font-bold">{index + 1}</span>
            </div>
          </div>
          <p className="text-left mt-[20px] text-[14px] text-darkgrey max-w-[230px] text-left">
            {step.description}
          </p>
          {/* Добавление горизонтальной пунктирной линии */}
          {index < steps.length - 1 && (
            <div className="absolute left-[23%] top-[12%] transform -translate-y-1/2 h-1 w-[192px] border-b-2 border-dashed border-#C4C4C4" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Steps;
