package com.practisern

import android.os.Bundle
import android.view.View
import android.widget.FrameLayout
import androidx.appcompat.app.AppCompatActivity
import com.facebook.react.interfaces.fabric.ReactSurface

class MainActivity : AppCompatActivity() {

  private var reactSurface: ReactSurface? = null

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)

    val container = FrameLayout(this).apply {
      id = View.generateViewId()
      layoutParams = FrameLayout.LayoutParams(
          FrameLayout.LayoutParams.MATCH_PARENT,
          FrameLayout.LayoutParams.MATCH_PARENT,
      )
    }
    setContentView(container)

    val reactHost = (application as MainApplication).reactHost
    reactSurface = reactHost.createSurface(this, "ProfileCard", null)

    val surfaceView = reactSurface?.view
    if (surfaceView != null) {
      container.addView(surfaceView)
      reactSurface?.start()
    }
  }

  override fun onDestroy() {
    reactSurface?.stop()
    super.onDestroy()
  }
}
