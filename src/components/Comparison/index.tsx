export default function Comparison() {
  return (
    <div id={'advantages'}>
      <h3 className={'text-center font-bold text-[60px]'}>
        ПродайЖилье или стандартная продажа?
      </h3>
      <table className={'mx-auto rounded-md overflow-hidden'}>
        <thead className={'uppercase'}>
          <tr>
            <th></th>
            <th>ПродайЖилье</th>
            <th>
              Продажа через <br /> риелтора
            </th>
            <th>
              Продажа <br /> лично
            </th>
          </tr>
        </thead>
        <tbody className={'text-center text-[20px]'}>
          <tr>
            <td className={'text-left'}>Завершение сделки за 3 дня</td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
          </tr>
          <tr>
            <td className={'text-left'}>Без навязчивых звонков от риелторов</td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
          </tr>
          <tr>
            <td className={'text-left'}>Без регулярных показов квартиры</td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
          </tr>
          <tr>
            <td className={'text-left'}>Аванс в день обращения</td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
          </tr>
          <tr>
            <td className={'text-left'}>Без комиссионных посреднику</td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
          </tr>
          <tr>
            <td className={'text-left'}>Гарантия продажи</td>
            <td>
              <i
                className={
                  'fa-solid text-[32px] fa-check-circle text-green-500'
                }
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
            <td>
              <i
                className={'fa-solid text-[32px] fa-circle-xmark text-red-500'}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
