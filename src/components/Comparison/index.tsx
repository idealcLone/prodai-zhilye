export default function Comparison() {
  return (
    <section
      id="advantages"
      className="overflow-auto"
      aria-labelledby="comparison-title"
    >
      <h3
        id="comparison-title"
        className="text-center font-bold text-[48px] mb-16"
      >
        ПродайЖилье или стандартная продажа?
      </h3>

      <table
        className="mx-auto rounded-md"
        aria-label="Comparison of ПродайЖилье and standard selling methods"
      >
        <thead className="uppercase">
          <tr>
            <th scope="col" className="sr-only">
              Feature
            </th>
            <th scope="col">ПродайЖилье</th>
            <th scope="col">Продажа через риелтора</th>
            <th scope="col">Продажа лично</th>
          </tr>
        </thead>

        <tbody className="text-center text-[18px]">
          <tr>
            <th scope="row" className="text-left font-normal">
              Завершение сделки за 3 дня
            </th>
            <td aria-label="ПродайЖилье: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
            <td aria-label="Продажа через риелтора: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
            <td aria-label="Продажа лично: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-left font-normal">
              Без навязчивых звонков от <br /> риелторов
            </th>
            <td aria-label="ПродайЖилье: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
            <td aria-label="Продажа через риелтора: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
            <td aria-label="Продажа лично: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-left font-normal">
              Без регулярных показов <br /> квартиры
            </th>
            <td aria-label="ПродайЖилье: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
            <td aria-label="Продажа через риелтора: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
            <td aria-label="Продажа лично: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-left font-normal">
              Аванс в день обращения
            </th>
            <td aria-label="ПродайЖилье: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
            <td aria-label="Продажа через риелтора: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
            <td aria-label="Продажа лично: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-left font-normal">
              Без комиссионных посреднику
            </th>
            <td aria-label="ПродайЖилье: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
            <td aria-label="Продажа через риелтора: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
            <td aria-label="Продажа лично: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
          </tr>

          <tr>
            <th scope="row" className="text-left">
              Гарантия продажи
            </th>
            <td aria-label="ПродайЖилье: Yes">
              <i
                className="fa-solid text-[32px] fa-check-circle text-green-500"
                aria-label="Yes"
              />
            </td>
            <td aria-label="Продажа через риелтора: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
            <td aria-label="Продажа лично: No">
              <i
                className="fa-solid text-[32px] fa-circle-xmark text-red-500"
                aria-label="No"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
