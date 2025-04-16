import React, {useState, useEffect, useContext} from 'react';
import TableSearch from '~/components/Table/Search/tableSearch';
import OrderRow from '~/components/Table/OrderRow/orderRow';
import TableHeader from '~/components/Table/Header/tableHeader';
import Button from '~/components/Utils/Button/button';
import refresh from '~/assets/icons/refreshIcon.svg';
import {StoreContext} from '~/store/storeContext.ts';
import {observer} from 'mobx-react-lite';
import Loader from '~/components/Utils/Loader/loader.tsx';

const OrdersTable: React.FC = observer(() => {
    const {
        appStore: {
            ordersStore: {fetchOrders, isLoading, error, orders},
        },
    } = useContext(StoreContext);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm.trim().length === 0 || searchTerm.trim().length >= 2) {
            fetchOrders(searchTerm);
        }
    }, [searchTerm]);

    const handleRefresh = () => {
        fetchOrders();
    };

    return (
        <div className="flex flex-col gap-[12px]">
            <TableHeader
                title="Orders"
                button={
                    <Button
                        iconPosition="left"
                        icon={refresh}
                        onClick={handleRefresh}
                        disable={isLoading}
                        name="Refresh"
                    />
                }
            />
            <div className="flex-grow">
                <TableSearch searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
            </div>

            {error && !isLoading && (
                <div className="mb-4 rounded border border-red-300 bg-red-100 p-4 text-red-500">
                    {error}
                </div>
            )}

            <div className="rounded border relative border-[#EDEDED]">
                <table className="w-[734px] bg-white">
                    <thead>
                    <tr>
                        <th className="py-[10px] pl-[24px]">
                            <div className="font-test-SemiBold flex justify-start text-[14px]">
                                Order #
                            </div>
                        </th>
                        <th className="py-[10px] pl-[24px]">
                            <div className="font-test-SemiBold flex justify-start text-[14px]">
                                Created at
                            </div>
                        </th>
                        <th className="py-[10px] pl-[24px]">
                            <div className="font-test-SemiBold flex justify-start text-[14px]">
                                Due date
                            </div>
                        </th>
                        <th className="py-[10px] pl-[24px]">
                            <div className="font-test-SemiBold flex justify-end text-[14px]">
                                Total
                            </div>
                        </th>
                        <th className="py-[10px] pr-[24px] pl-[24px]">
                            <div className="font-test-SemiBold flex justify-end text-[14px]">
                                Status
                            </div>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {orders.map((order, index) => (
                        <OrderRow key={index} order={order}/>
                    ))}
                    {orders.length === 0 && !isLoading && (
                        <tr style={{height: '60px'}}>
                            <td colSpan={5} className="py-10 text-center text-gray-500">
                                {searchTerm.trim().length >= 2
                                    ? 'No orders match your search.'
                                    : 'No orders found.'}
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-white">
                        <Loader/>
                        <span className="ml-2">Loading orders...</span>
                    </div>
                )}
            </div>
        </div>
    );
});

export default OrdersTable;
