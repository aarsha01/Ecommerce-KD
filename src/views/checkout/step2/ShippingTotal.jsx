import { useFormikContext } from 'formik';
import { displayMoney } from '@/helpers/utils';
import PropType from 'prop-types';
import React from 'react';
import qrcode from '@/images/qrcode_gpay.png';

const ShippingTotal = ({ subtotal }) => {
  const { values } = useFormikContext();

  return (
    <div className="checkout-total d-flex-end padding-right-m">
      <table>
        <tbody>
          <tr>
            <td>
              <span className="d-block margin-0 padding-right-s text-right">
                International Shipping: &nbsp;
              </span>
            </td>
            <td>
              <h4 className="basket-total-amount text-subtle text-right margin-0 ">
                {values.isInternational ? 'Rs. 50.00' : 'Rs. 0.00'}
              </h4>
            </td>
          </tr>
          <tr>
            <td>
              <span className="d-block margin-0 padding-right-s text-right">
                Subtotal: &nbsp;
              </span>
            </td>
            <td>
              <h4 className="basket-total-amount text-subtle text-right margin-0">
                {displayMoney(subtotal)}
              </h4>
            </td>
          </tr>
          <tr>
            <td>
              <span className="d-block margin-0 padding-right-s text-right">
                Total: &nbsp;
              </span>
            </td>
            <td>
              <h2 className="basket-total-amount text-right">
                {displayMoney(Number(subtotal) + (values.isInternational ? 50 : 0))}
              </h2>
            </td>
          </tr>
        </tbody>
      </table>

      {/* QR image goes here ------------ */}
      <div className="banner-img">
        <img src={qrcode} alt="" />
      </div>
    </div>
  );
};

ShippingTotal.propTypes = {
  subtotal: PropType.number.isRequired
};

export default ShippingTotal;
