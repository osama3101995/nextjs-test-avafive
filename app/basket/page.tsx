'use client'
import Breadcrumbs from "@/components/Breadcrumbs";
import CartTable from "@/components/CartTable";
import { Collapse, CollapseProps, Divider, Input, Space, Button as AntdButton } from "antd";
import Link from "next/link";
import React from "react";
import "./style.css";
import Button from "@/components/Button";

const BasketPage = () => {
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Apply Coupon Code",
      children: (
        <div className=" voucherfield">
          <Space.Compact style={{ width: "100%" }}>
            <Input
              className="h-12"
              size="large"
              placeholder="Apply Valid Pincode"
            />
            <AntdButton className="font-semibold" size="large" type="primary">
              CHECK
            </AntdButton>
          </Space.Compact>
        </div>
      ),
    },
  ];  

  return (
    <section className="mainPage basket-section">
      <Breadcrumbs>
        <Link href={"/"}>Home</Link>
        <Link href={`/basket`}>Cart</Link>
      </Breadcrumbs>
      <h2 className="font-semibold text-[--md-blue] mt-7">My Cart</h2>
      <section className="flex justify-between mt-9 items-center max-sm:flex-col">
        <section className="sm:basis-7/12">
          <CartTable />
        </section>
        <section className="orderSummary  sm:basis-4/12">
          <h4>Order Summary</h4>
          <Divider />
          <article className="mt-8">
            <div className="orderSummaryElements">
              <span>Sub Total</span>
              <span>$119.69</span>
            </div>
            <div className="orderSummaryElements">
              <span>Discount</span>
              <span>-$13.40</span>
            </div>
            <div className="orderSummaryElements">
              <span>Delivery Fee</span>
              <span>-$0.00</span>
            </div>
            <div className="orderSummaryElements font-semibold">
              <span>Grand Total</span>
              <span>$106.29</span>
            </div>
          </article>
          <div className="cta flex mt-10">
            <Button className="basis-1/2 w-full px-0">
              <span className="ml-2 text-[#fff]">Place Order</span>
            </Button>
            <Button className="ml-5 basis-1/2 w-full  px-0" type={"outline"}>
              <span className="ml-2 text-[--md-blue]">Continue Shopping</span>
            </Button>
          </div>
        </section>
      </section>
      <section className="w-full sm:w-7/12 max-sm:mt-5">
        <Collapse expandIconPosition="right" defaultActiveKey={["1"]} ghost items={items} />
      </section>
    </section>
  );
};

export default BasketPage;
