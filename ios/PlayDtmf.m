#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(PlayDtmf, NSObject)
RCT_EXTERN_METHOD(playTone:(NSString *)digit)
RCT_EXTERN_METHOD(stopTone)
@end
