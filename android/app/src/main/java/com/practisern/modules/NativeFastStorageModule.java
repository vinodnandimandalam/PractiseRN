package com.practisern.modules;

import android.content.SharedPreferences;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.practisern.specs.NativeFastStorageSpec;

public class NativeFastStorageModule extends NativeFastStorageSpec {
    public static final String NAME = "NativeFastStorage";
    private final SharedPreferences sharedPreferences;

    public NativeFastStorageModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.sharedPreferences = reactContext.getSharedPreferences("NativeFastStorage", ReactApplicationContext.MODE_PRIVATE);
    }


    @NonNull
    @Override
    public String getName() {
        return NAME;
    }

    // Synchronous methods for storage operations
    @Override
    public void setItemSync(String key, String value) {
        sharedPreferences.edit().putString(key, value).commit();
    }

    @Override
    public String getItemSync(String key) {
        return sharedPreferences.getString(key, null);
    }

    @Override
    public void deleteItemSync(String key) {
        sharedPreferences.edit().remove(key).commit();
    }

    @Override
    public void clearAllSync() {
        sharedPreferences.edit().clear().commit();
    }
}
