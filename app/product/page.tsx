import { FaStar, FaStarHalf } from "react-icons/fa";

export const Products = () => {
  return (
    <div>
        <div className="flex justify-center text-center mt-14 text-black text-4xl font-semibold "><h1>NEW  ARRIVALS</h1></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/d40d/a9a3/a7234235e66d6695d9d7098fc3289872?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C-urOu~VPbocNZmedYRRZ9ZU6bf6xCxFK23dEcHXzrhvgRvNUSZR0s8kztOmNbw4-KUsR4KFI1Rx9w-dG7~zI0rHQZABsAbcSaBHj5GytDCSY0GUrfhhG1qzNINo1K2lMBJvFRV4BHJiO9HrVEfQwznz8~0087rtZzjFYQErJVI3kjyLB85BNW-uRldYVwuGZ0CosmSf35HoU1KupYuw9NyRFskL8bFluudBZxy0vAGDfwL0XbpLOoDel87~58BHHFwhSP39aQZD1yq1y5-Pi4tSU~8HAkI89xKTPh0LetwnMwHCZGEHu2GCtfqQHk-ENRATA3CXmjqxDQjSeFQ1FQ__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    T-SHIRT WITH TAPE DETAILS
                  </h1>
                  <p className="text-gray-900 font-bold">$120</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/769b/9d60/ff941dde9bc0e54431b8d8fe3182f5e9?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CQj7Vc4x20SwPH1hV~Qb3axmk-NKIjyO0KX5GvOaq7c7~piTqbvufRRnhB~nO9aMuUcT0sDIdGWJeg7EaZxGmYADeXUewU75cicQaBbVAAODEXfgwUrWj-o4VQ4l1W5xAFCKJnxdx0TZGlxV6ESZjYM9DRyZdhez6wP0V5S-zSiHcZRoyqKWHr4H~ehMDCWw6XL-hGKCpl5LYY85LKaxPVZc-5UlEKvPsDwruL1ar-NhKCTLgQVtEBZqF5cGmBvC75hLZcRzjkxsbz5oCqg-W1nEiuqPcp2mBvqMZR8TZDp5TqQD3odbshVXYv10Gr-ImWuy16rXE0n-7Bgs9w1inw__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    SKINNY FIT JEANS
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$240</p>
                    <p className="text-gray-400 font-bold"><del>$260</del></p>
                    <p className="text-red-500 bg-red-200 ">$20%</p>
                  </div>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">3.5/5 stars</p>
                </div>
              </div>
            </div>

            {/* Third Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/bbf4/11c2/5fc84f87eeac1062fbe47f49c192d4f2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pBGcjPBJcO7tQ1QqA-3ZT-iD7ZFcDOroLNgoNjAJck2nz9XmDbgbt2FhtRhRAkPWOmhZjkqgiSIFDkh6BthRPLplJ9yuD57YkP3DunHLde-82u43ySckTn7RRvG9lh-UWbA3nShs2SQBWG~I5ZBznF8fLIFq1bO~C6XZReGgLCw0ycH3OCFSlmhRQYKcP1a2ait7DVZetZ2aMsmevxzWod-ptdG2bWZoyDeMuD5PC7VYdaECqPCEortKtBbb08arlIA9QISm9x2LCnUhm1cTKqWrv4JQe1q4fGIzarHwj9qnIzXt8IH8iYWBYR3Z6-1Jop8HDaI7YV9GKVbEs4KnmQ__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    CHECKERED SHIRT
                  </h1>
                  <p className="text-gray-900 font-bold">$180</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/3457/42c2/7cc557f42cf1d489f7cc811856b90e9f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o0vCZSJ76Mg6DK6N1AEMRlBdXXjhHpCfmb~wb7HjQ9vlACxNhbVgjUO7DGD3NUXqlNwPt~5UbVxjCBk7-8LFNz3ENAv-dn9knWbbJltneZz81Ma2P5pOnOQEiAsaBalgjos27NoCZiCdSu6oFbxpfxjDCcfGweSrj6vsb4be2u8UONZKXJp69iaBTCeJl5RRlGq2sgIDAwACvFtpwCxruSFTXKoYgJBnOa9n0JWHZ4JGkuZMNEB0lS~zqX7M0nHFAdLPXG7hxtmeW3GpGjzyVupFAecodO9DZtVARFBCcFk34lhgsx79zn8P~j~13yN400gBbB7Zib9DxIooJMGsCQ__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                    SLEEVE STRIPED T-SHIRT
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$130</p>
                    <p className="text-gray-400 font-bold"><del>$160</del></p>
                    <p className="text-red-500 bg-red-200 ">$30%</p>
                  </div>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
        <div className="flex justify-center mt-5 mb-5">
          <button className="text-black bg-white hover:bg-white hover:text-blue-400 w-16px">View All</button>
        </div>



      <div className="flex justify-center text-center mt-14 text-black text-4xl font-semibold "><h1>Top Selling</h1></div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* First Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/e01f/5d3c/d9029bd465a4c7158689ab1619693014?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DhSrMZ48TVCUSb653n~gzLrzvzTZz58~l4viwIQgSos0No48afJSwF9F8vMbnSXJs2M49-lPucvc8Igk8e~sHmtVTPC8lafQrKnYhKNtA~JNH1eeLgjWqPHvGImfVhBC7B3X6JUNtDGiOxUCtdh250uZDn4Vh7q2d-bwGLjT6gRBdXjTrNFlpa40xaV3WLz74~JpTjeU6UoPbBVkZwqINqcCrBdmUre0hMRSb~xgX9Zxwb6FGV7WfO39rKhy1cpMC4SKE5MWISio2HjeijzlPV0luNFMPRY2TOUis2TNbdJ9SlrmPd-NZVWRXI4srOgPYuuMWs~tzHEkLSPkYITxDw__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  VERTICAL STRIPED SHIRT
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$212</p>
                    <p className="text-gray-400 font-bold"><del>$232</del></p>
                    <p className="text-red-500 bg-red-200 ">$20%</p>
                    </div>
                    <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">5.0/5 stars</p>
                </div>
              </div>
            </div>

            {/* Second Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/5723/4b01/d5fcac5632cf6823570ca2d1d53d7d73?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cH63SMliUeotSJuntZCBZD6iRM6vmC8-llGfjc3YbtYtUs~iax076MP5i4S0NXPLKaWJj6KMsb9nqsorr9JYohCa3XiD38zsX~xnOjR9E~dRkRwy~IHoDIJ1ofMH8Mpgch93dA1iHgOLShJKdK6vWR6iYHCWYgnycrEHze9oFWNyJSSbxTUWx2vOFO2AZqTy9yc0UwBjviSOfYQa-~~EIWfM7XNAZlP4PyZ01cyS0dAdcDei9DKBx1~oyv9x8ZRkknRIkcC1xc3pqcId7uOsLOSQBUjOhtiYbDV1TChP29zqbOyfWQCw6GvWH~-kb-Zm468DDAwGtfhiuCaPUOrwwA__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  COURAGE GRAPHIC T-SHIRT
                  </h1>
                  <div className="flex gap-2">
                    <p className="text-gray-900 font-bold">$145</p>
                   
                  </div>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.0/5 stars</p>
                </div>
              </div>
            </div>

            {/* Third Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/8951/5d71/4a66d9ca1401101dee4cc689f8bb5ad2?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y0F0i5clnyaB5gl5WR8vjo4r4FRZyq5E~ujXW3eH85vOEu4io6EXT7v42gNprlr4aVMk1fcVJ0wymbqdMzMg7BJwOKLCm9WnIjYFcpgiBsWsfZWEPVVpQTzmE2RmiPcUt6HEP0k6RyhsFl4HNDOg2NYhWcs5c8tGbDepkCKNjPx3TPQxeI0p45yB04oY6rnpQC2uMa8nNXizdFVT~-1jIGTOBJJxzW6m9ktkCdRh~N3wuHjqnPUXn1i1qENS34vk6XJ77PtBNnpvKTLhpg6QA~PNuDW9O8jb26JRTn3OwKj-~w~q0NFuBqc2d2pzYXgOyymjqCnEZw~z-OnN8c6UCA__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  LOOSE FIT BERMUDA SHORTS
                  </h1>
                  <p className="text-gray-900 font-bold">$80</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    </div>
                  <p className="text-gray-900 text-sm mt-2">3.0/5 stars</p>
                </div>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="p-4 md:w-1/4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden flex flex-col">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://s3-alpha-sig.figma.com/img/f180/c768/08e2ff8a46be56aa933f031aed3abe75?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q8FUjPAWqiCr5OP0itTPVLy5WLcbegUkYyoZzESs0dtUKqeeRkoRedAgJIGc77I4BYyTBovPLf4y4C~4Vy9MTzyZp33uBSuymHxo3UPHHjCwOtMqqcl9ty3EW9kwHnPKRVxiA9dhwdIGPvuslNp8tXpBwzfaNJl6d9EA80x~sXzYxd-YnqNqHXaaN6VBQuG-KnM2incTwWpWUee~Te8XmmtNit7QBBhchsdRKcELZI-FDVb62vYkCdhNsGLTSkEpHaIoXoJDd7YVWHUWtYZvffXalc41cxvoks-NRCvEZyjQ2XJAUP-zPsI8vTw2go6YWcogbFyzV46RqoQJ-tKkjA__"
                  alt="T-shirt"
                />
                <div className="p-6 bg-gray-200 flex flex-col flex-grow">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
                  FADED SKINNY JEANS
                  </h1>
                  <p className="text-gray-900 font-bold">$210</p>
                  <div className="flex gap-1">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStarHalf className="text-yellow-400" />
                  </div>
                  <p className="text-gray-900 text-sm mt-2">4.5/5 stars</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-black bg-white hover:bg-white hover:text-blue-400 w-16px">View All</button>
        </div>
      </section>   
   </div>
  );
}
