import { cookies, headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }) {
  const { eventId } = params;

  // const searchParams = request.nextUrl.searchParams;
  // const query = searchParams.get("query"); // 拿不到!

  const res = {
    data: {
      eventId: eventId,
      eventTitle: "活動標題",
      creationTime: 1700636552000,
      creationBy: "test004",
      lastUpdatedTime: 1724881637000,
      lastUpdatedBy: "peter5",
      dataSourceKey: null,
      currentUser: null,
      activityId: 959,
      activityTitle: "測試中",
      deviecId: "2,3,1,4",
      classificationId: "1,11,12,13,62,63,64,65,66,67,70,71,72",
      isRecommend: 0,
      pcImage: "https://tupian1.s3.ap-east-1.amazonaws.com/4.png",
      phoneImage: "https://tupian1.s3.ap-east-1.amazonaws.com/4.png",
      ipadImage: "https://tupian1.s3.ap-east-1.amazonaws.com/4.png",
      qpImage: "https://tupian1.s3.ap-east-1.amazonaws.com/4.png",
      useImageStatus: 1,
      sortId: 0,
      uploadImage: "https://tupian1.s3.ap-east-1.amazonaws.com/4a.png",
      activityContent:
        '<p><img src="https://img.imgewzm9rcv.com:9663/ghyl/20240715/common/1721039018735.gif" style="height:100%; width:100%" />即日起在【开元棋牌142.vip】使用&nbsp;Upay钱包、Gopay钱包、Okpay钱包、Topay钱包、Kdpay钱包、Vippay钱包、Fpay钱包、Mpay钱包、C币钱包、波币钱包、钱能钱包、TGpay钱包、万币钱包、JD钱包、EBpay钱包、OBpay钱包、ABpay钱包、808钱包（Upay钱包无需额外下载APP，不需要注册账号，只要是我司会员，登录会员账号即可使用）存取款即可获得加赠彩金，存取款越多、送的越多，强烈建议您注册使用虚拟钱包存取款，超多优惠等着您来拿！快点邀请您的小伙伴一起来参与吧！<br />\r\n<strong>★充值方式★</strong></p>\r\n\r\n<table border="1" cellspacing="0" style="width:100%">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td><span style="color:#000000">充值通道</span></td>\r\n\t\t\t<td><span style="color:#000000">充值金额</span></td>\r\n\t\t\t<td><span style="color:#000000">加赠彩金</span></td>\r\n\t\t\t<td><span style="color:#000000">申请方式</span></td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td><a href="http://fdg4263.com" lang="width:100%;" style="width:100%;"><span style="color:#000000">http://fdg4263.com</span></a></td>\r\n\t\t\t<td><a href="http://fdg4263.com" lang="width:100%;" style="width:100%;"><span style="color:#000000">http://fdg4263.com</span></a></td>\r\n\t\t\t<td><a href="http://fdg4263.com" lang="width:100%;" style="width:100%;"><span style="color:#000000">http://fdg4263.com</span></a></td>\r\n\t\t\t<td><a href="http://fdg4263.com" lang="width:100%;" style="width:100%;"><span style="color:#000000">http://fdg4263.com</span></a></td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p><strong>例：</strong>会员A使用虚拟钱包充值10000元，系统自动赠送300元的加赠彩金，实际到账10300元。</p>\r\n\r\n<p><strong>★取款方式★</strong></p>\r\n\r\n<table border="1" cellspacing="0" style="width:100%">\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<td>取款通道</td>\r\n\t\t\t<td>取款金额</td>\r\n\t\t\t<td>赠送彩金</td>\r\n\t\t\t<td>申请方式</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<td>虚拟币数字钱包</td>\r\n\t\t\t<td>50+</td>\r\n\t\t\t<td>1%</td>\r\n\t\t\t<td>登录红包领取</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>\r\n\r\n<p><strong>例：</strong>会员B使用虚拟钱包提款10000元，次日下午15:00登录即可领取100元的红包奖励。<br />\r\n<strong>虚拟钱包存取优势及活动细则：</strong><br />\r\n优势1：解决我司百万会员银行转账充值不了的难题，银行风控问题，交易流水大问题；<br />\r\n优势2：虚拟钱包存取一体，方便快捷，安全高效无冻结，没有任何延迟到账；<br />\r\n优势3：支持微信、支付宝、网银买币以及卖币方式，减少银行卡被冻结风控问题，加密交易，存取无限额，资金隐私安全可靠，无需承担任何手续费用，成功率100%，让您玩的放心，取的更舒心！<br />\r\n规则1：所获彩金无需申请，系统自动派送，一倍流水，即可取款；<br />\r\n规则2：如发现任何团体或个人以不诚实方式套取红利或威胁、滥用公司优惠行为，公司保留让会员提供部分证件及冻结、取消该团体或个人账号及账户结余的权利；<br />\r\n规则3：开元棋牌保留对活动的最终解释权，以及在无通知的情况下修改，终止活动的权利，适用于所有优惠。</p>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p><img alt="" src="https://img.img05beithael.com:9663/ghyl/20240818/common/1723961103194.png" style="height:100%; width:100%" /></p>',
      h5Url: null,
      activityDesc: "測試中",
      classifyId: 1,
      classifyName: "全部優惠",
      classifyStatus: 1,
    },

    msg: "success",
    status: 200,
  };
  return Response.json(res);
}
